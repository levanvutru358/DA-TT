const pool = require("../../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM addresses WHERE user_id=?",
    [req.user.id]
  );
  res.json(rows);
};

exports.create = async (req, res) => {
  const { full_name, phone, province, district, ward, detail } = req.body;

  await pool.query(
    "INSERT INTO addresses(user_id,full_name,phone,province,district,ward,detail) VALUES (?,?,?,?,?,?,?)",
    [req.user.id, full_name, phone, province, district, ward, detail]
  );

  res.json({ message: "Address added" });
};