const ServiceController = require("../controllers/service.controller");
const { validateService } = require("../middlewares/service.middleware");

const express = require("express");
const router = express.Router();

router.get("/", ServiceController.getServices);
router.get("/:id", ServiceController.getServiceById);
router.post("/",validateService,ServiceController.saveService);
router.delete("/:id", ServiceController.deleteService);
router.put("/:id", ServiceController.editService);
router.patch("/:id", ServiceController.editService);


module.exports = router;


