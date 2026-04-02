const db = require("../../config/db");

exports.getProfile = async (userId) => {
  const [rows] = await db.query(
    "SELECT id, name, email, phone FROM users WHERE id = ?",
    [userId]
  );
  return rows[0];
};

exports.updateProfile = async (userId, data) => {
  await db.query(
    "UPDATE users SET name = ?, phone = ? WHERE id = ?",
    [data.name, data.phone, userId]
  );

  const [rows] = await db.query(
    "SELECT id, name, email, phone FROM users WHERE id = ?",
    [userId]
  );

  return rows[0];
};