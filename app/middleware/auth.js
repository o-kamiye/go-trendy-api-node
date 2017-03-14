const jwt = require('jsonwebtoken');


exports.authenticate = (req, res, next) => {
  let token = req.body.token || req.headers['go-trendy-token'];

  if (token) {
    jwt.verify(token, req.app.get('secret'), (err, decoded) => {
      if (err)
        return res.status(401).send({
        success: false,
        message: 'Unauthorized. Authentication error.'
      });
      else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    return res.status(403).send({
      success: false,
      message: 'Forbidden. No authentication token.'
    });
  }
};
