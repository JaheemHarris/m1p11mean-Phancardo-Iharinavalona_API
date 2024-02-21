const UserController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.get("/users", UserController.getUsers);

module.exports = router;
