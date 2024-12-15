const { en } = require('./en')
const { vi } = require('./vi')

const translations = {
    en, 
    vi
}

module.exports = {
    translations,
    all_language: Object.keys(translations)
}