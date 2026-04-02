const express = require("express");
const router = express.Router();

const userController = require("./user.controller");
const auth = require("../../middlewares/auth.middleware");

// DEBUG (quan trọng)
console.log("userController:", userController);
console.log("auth:", auth);

// Routes
router.get("/profile", auth, userController.getProfile);
router.put("/profile", auth, userController.updateProfile);

module.exports = router;