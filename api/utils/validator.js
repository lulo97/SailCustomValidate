const { skip_rule_names } = require('./shared_rules');
const { translations } = require('./translations/translations');

function validateLength(input_value, validate_value, trans) {
    if (input_value.length !== validate_value) {
        return trans.replace('{threshold}', validate_value);
    }
    return null;
}

function validateMaxLength(input_value, validate_value, trans) {
    if (input_value.length > validate_value) {
        return trans.replace('{threshold}', validate_value);
    }
    return null;
}

function validateMinLength(input_value, validate_value, trans) {
    if (input_value.length < validate_value) {
        return trans.replace('{threshold}', validate_value);
    }
    return null;
}

function validateMax(input_value, validate_value, trans) {
    if (input_value > validate_value) {
        return trans.replace('{threshold}', validate_value);
    }
    return null;
}

function validateMin(input_value, validate_value, trans) {
    if (input_value < validate_value) {
        return trans.replace('{threshold}', validate_value);
    }
    return null;
}

function validateIsInteger(input_value, validate_value, trans) {
    if (validate_value && !Number.isInteger(Number(input_value))) {
        return trans;
    }
    return null;
}

function validateIsNumber(input_value, validate_value, trans) {
    const isNumber = !isNaN(parseFloat(input_value)) && isFinite(input_value);

    if (!isNumber) {
        return trans;
    }

    return null;
}


function validateEnum(input_value, validate_value, trans) {
    if (!validate_value.includes(input_value)) {
        return trans.replace('{expected}', validate_value.join(', '));
    }
    return null;
}

function validateRequired(input_value, validate_value, trans) {
    console.log("vao day 2")
    if (validate_value && (input_value === undefined || input_value === null || input_value === '')) {
        return trans;
    }
    return null;
}

function validateIsArray(input_value, validate_value, trans) {
    if (!Array.isArray(input_value)) {
        return trans;
    }
    return null;
}

function validateIsArrayString(input_value, validate_value, trans) {
    if (!Array.isArray(input_value)) {
        return trans;
    }
    for (let ele of input_value) {
        if (typeof ele !== 'string') {
            return trans;
        }
    }
    return null;
}

function getErrorMessage(validate_key, validate_value, input_value, field, language) {
    
}

// Main validator function
function validator(rule_value, input_value, language) {
    const field = rule_value.name[language];

    for (const [validate_key, validate_value] of Object.entries(rule_value)) {

        if (skip_rule_names.includes(validate_key)) continue;
        
        const trans = translations[language][validate_key].replace('{field}', field);

        //Handle true/false for some boolean validate
        if (!validate_value) return null;
    
        switch (validate_key) {
            case 'length':
                return validateLength(input_value, validate_value, trans);
            case 'maxLength':
                return validateMaxLength(input_value, validate_value, trans);
            case 'minLength':
                return validateMinLength(input_value, validate_value, trans);
            case 'max':
                return validateMax(input_value, validate_value, trans);
            case 'min':
                return validateMin(input_value, validate_value, trans);
            case 'isInteger':
                return validateIsInteger(input_value, validate_value, trans);
            case 'isNumber':
                return validateIsNumber(input_value, validate_value, trans);
            case 'enum':
                return validateEnum(input_value, validate_value, trans);
            case 'required':
                console.log("vao day 1")
                return validateRequired(input_value, validate_value, trans);
            case 'isArray':
                return validateIsArray(input_value, validate_value, trans);
            case 'isArrayString':
                return validateIsArrayString(input_value, validate_value, trans);
            default:
                // If no validation matches, continue
                break;
        }
    }

    return null;
}

module.exports = {
    validator,
}