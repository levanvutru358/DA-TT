const pool = require('../config/db');

module.exports = async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : null;
    const action = req.method + " " + req.originalUrl;

    await pool.query(
      "INSERT INTO audit_logs (user_id, action, method, url) VALUES (?, ?, ?, ?)",
      [userId, action, req.method, req.originalUrl]
    );
  } catch (err) {
    console.log("Audit error:", err.message);
  }

  next();
};