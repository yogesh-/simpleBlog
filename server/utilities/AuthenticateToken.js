const jwt = require("jsonwebtoken");
const JWT_SECRET = "swfefw35cdfbbdsvvfd";

const AuthenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token.replace("Bearer ", ""), JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = AuthenticateToken;
