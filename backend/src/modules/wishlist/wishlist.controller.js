const pool = require("../../config/db");

exports.getWishlist = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM wishlists WHERE user_id=?",
    [req.user.id]
  );
  res.json(rows);
};

exports.addWishlist = async (req, res) => {
  await pool.query(
    "INSERT INTO wishlists(user_id,product_id) VALUES (?,?)",
    [req.user.id, req.params.productId]
  );
  res.json({ message: "Added wishlist" });
};