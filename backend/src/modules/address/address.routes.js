const router = require("express").Router();
const controller = require("./address.controller");
const auth = require("../../middlewares/auth.middleware");

router.get("/", auth, controller.getAll);
router.post("/", auth, controller.create);

module.exports = router;