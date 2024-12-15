const { handleValidate } = require('../utils/handleValidate');
const { all_language } = require('../utils/translations/translations');

module.exports = async function validateParams(req, res, proceed) {
    if (!req.headers['language']) {
      return res.badRequest({
        message: "Missing 'language' header."
      });
    }

    const language = req.headers['language'];
    if (language.length !== 2) {
      return res.badRequest({
        message: "'language' header must be exactly 2 characters long."
      });
    }
  
    if (!all_language.includes(language)) {
      return res.badRequest({
        message: `language in header must be ${all_language}`
      });
    }
    
    const errorMessage = handleValidate(req);

    if (errorMessage) {
        return res.badRequest({
            message: errorMessage
        });
    }

    return proceed();
};









