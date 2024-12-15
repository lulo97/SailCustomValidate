module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /user' : { action: 'user/v1-get-user' }
};
