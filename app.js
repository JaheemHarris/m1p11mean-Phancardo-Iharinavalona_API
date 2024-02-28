const express = require("express");
require("dotenv").config();
const logger = require("./lib/logger");
const morganMiddleware = require("./middlewares/morgan.middleware");
const cors = require("cors");
const dbService = require("./services/database.service");
const multer  = require('multer')
const upload = multer()
const {
	UserRoutes,
	CustomerRoutes,
	EmployeeRoutes,
	ServiceRoutes,
	EmailRoutes,
	AuthRoutes,
} = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;
dbService.openDbConnection();

app.use(morganMiddleware);

app.use(cors());

app.use(upload.array())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/auth", AuthRoutes);
app.use("/users", UserRoutes);
app.use("/customers", CustomerRoutes);
app.use("/employees", EmployeeRoutes);
app.use("/services", ServiceRoutes);
app.use("/email", EmailRoutes);

app.listen(PORT, () => {
	logger.info(`Server is running on port: ${PORT}`);
});
