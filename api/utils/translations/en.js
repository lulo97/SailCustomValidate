const en = {
    length: '{field} must have a length of {threshold}', 
    maxLength: '{field} must have a length less than or equal to {threshold}', 
    minLength: '{field} must have a length greater than or equal to {threshold}',
    max: '{field} must have a value less than or equal to {threshold}',
    min: '{field} must have a value greater than or equal to {threshold}',
    isInteger: '{field} must be an integer', 
    isNumber: '{field} must be of type number', 
    isArray: '{field} must be an array',
    isArrayString: '{field} must be an array of string',
    enum: '{field} must be one of the values {expected}', 
    required: '{field} is required', 
    unknown: 'Input contains unknown fields: {value}',
}

module.exports = {
    en
}