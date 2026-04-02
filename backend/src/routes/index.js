const express = require("express");
const router = express.Router();

const authRoutes = require("../modules/auth/auth.routes");
const userRoutes = require("../modules/users/user.routes");
const addressRoutes = require("../modules/address/address.routes");
const wishlistRoutes = require("../modules/wishlist/wishlist.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/address", addressRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;