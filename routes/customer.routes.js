const CustomerController = require("../controllers/customer.controller");
const express = require("express");
const router = express.Router();

router.get("/", CustomerController.getCustomers);
router.post("/", CustomerController.saveCustomer);

module.exports = router;
