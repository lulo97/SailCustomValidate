module.exports = function badRequest(data, options) {
    const res = this.res;
  
    res.status(400);
  
    return res.json({
      message: data.message,
      errorCode: -1
    });
  };
  