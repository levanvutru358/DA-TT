const jwt = require("jsonwebtoken");

exports.generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, role: user.role_id },
    "SECRET_KEY",
    { expiresIn: "15m" }
  );
};

exports.generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id },
    "REFRESH_SECRET",
    { expiresIn: "7d" }
  );
};