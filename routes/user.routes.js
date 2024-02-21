const UserController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.get("/", UserController.getUsers);

module.exports = router;
