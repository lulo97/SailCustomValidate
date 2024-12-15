const { translations } = require("./translations/translations");

function isNull(value) {
    return value == null || value == undefined
}

function isEmpty(value) {
    return value == '' || JSON.stringify(value) == '[]' || JSON.stringify(value) == '{}'
}

function isNullOrEmpty(value) {
    return isNull(value) || isEmpty(value)
}

function getErrorMessage({field_key, value, expected, threshold}, instance, language) {
    let errorMessage = translations[language].length;
    errorMessage = errorMessage.replace("{field}", instance.rules[field_key].name[language]);
    errorMessage = errorMessage.replace("{value}", value ?? '');
    errorMessage = errorMessage.replace("{expected}", expected ?? '');
    errorMessage = errorMessage.replace("{threshold}", threshold ?? '');
    return errorMessage
}

module.exports = {
    isNull, isEmpty, isNullOrEmpty, getErrorMessage
}