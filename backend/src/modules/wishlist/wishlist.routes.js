const router = require("express").Router();
const controller = require("./wishlist.controller");
const auth = require("../../middlewares/auth.middleware");

router.get("/", auth, controller.getWishlist);
router.post("/:productId", auth, controller.addWishlist);

module.exports = router;