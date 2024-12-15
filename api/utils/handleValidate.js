const { shared_rules } = require('./shared_rules');
const { translations } = require('./translations/translations');
const { validator } = require('./validator')
const { isNullOrEmpty } = require('./utils')

function handleValidate(req) {
    const language = req.headers['language'];

    //Get rules from current api
    const { rules } = require(`../controllers/${req.options.action}`)

    //Combine with shared rules
    const combined_rules = { ...rules, ...shared_rules }

    //Get api input
    let api_input = req.params;
    if (['GET', 'DELETE'].includes(req.method)) {
        api_input = { ...api_input, ...req.query };
    }
    if (['POST', 'PUT'].includes(req.method)) {
        api_input = { ...api_input, ...req.body };
    }
    if (!api_input || JSON.stringify(api_input) == '{}') {
        api_input = {};
    }

    //Check if unknown input is passed
    const expected_fields = Object.keys(combined_rules);
    const input_fields = Object.keys(api_input);
    const unknown_fields = input_fields.filter(field => !expected_fields.includes(field));

    if (unknown_fields.length > 0) {
        return translations[language]['unknown'].replace('{value}', unknown_fields.join(', '));
    }

    //Loop through each fields rule
    for (const [rule_key, rule_value] of Object.entries(combined_rules)) {

        //If parameter is not required and not passed then don't check anything
        if (!combined_rules[rule_key].required && isNullOrEmpty(api_input[rule_key])) {
            return;
        }

        //Validate required first all other validates
        if (combined_rules[rule_key].required && isNullOrEmpty(api_input[rule_key])) {
            const field = combined_rules[rule_key].name[language];
            const errorMessage = translations[language].required.replace('{field}', field);
            if (errorMessage) {
                return errorMessage
            };
        }

        //Validating
        const input_value = api_input[rule_key]
        const errorMessage = validator(rule_value, input_value, language)
        if (errorMessage) {
            return errorMessage;
        }
    }

    return null;
}

module.exports = {
    handleValidate
}