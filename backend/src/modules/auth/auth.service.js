const pool = require("../../config/db");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/token");

exports.register = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);

  await pool.query(
    "INSERT INTO users(name,email,password) VALUES (?,?,?)",
    [data.name, data.email, hash]
  );
};

exports.login = async (data) => {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email=?",
    [data.email]
  );

  const user = rows[0];

  const match = await bcrypt.compare(data.password, user.password);
  if (!match) throw new Error("Wrong password");

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await pool.query(
    "INSERT INTO refresh_tokens(user_id,token) VALUES (?,?)",
    [user.id, refreshToken]
  );

  return { accessToken, refreshToken };
};

exports.refresh = async (token) => {
  return { accessToken: "new token" };
};

exports.forgotPassword = async (email) => {
  const token = crypto.randomBytes(32).toString("hex");

  await pool.query(
    "INSERT INTO password_resets(email,token) VALUES (?,?)",
    [email, token]
  );

  return token;
};

exports.resetPassword = async (email, newPassword) => {
  if (!email || !newPassword) {
    throw new Error("Email and new password required");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await pool.query(
    "UPDATE users SET password = ? WHERE email = ?",
    [hashedPassword, email]
  );

  return {
    message: "Password reset successful"
  };
};