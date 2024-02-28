const AuthController = require("../controllers/auth.controller");
const express = require("express");
const {
	validateUser,
	validateCredentials,
	checkTokens,
} = require("../middlewares/user.middleware");
const router = express.Router();

router.post("/register", validateUser, AuthController.register);
router.post("/login", validateCredentials, AuthController.login);
router.post("/refresh", checkTokens, AuthController.refresh);

module.exports = router;
