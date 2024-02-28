const CustomerController = require("../controllers/customer.controller");
const express = require("express");
const router = express.Router();
const { validateUser } = require("../middlewares/customer.middleware");

router.get("/", CustomerController.getCustomers);
router.post("/", validateUser, CustomerController.saveCustomer);

module.exports = router;
