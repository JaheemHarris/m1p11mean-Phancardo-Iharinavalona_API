const express = require("express");
const logger = require("./lib/logger");
const morganMiddleware = require("./middlewares/morgan.middleware");
const cors = require("cors");
const dbService = require("./services/database.service");
const { UserRoutes } = require("./routes");

const app = express();
const PORT = "8080";
dbService.openDbConnection();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morganMiddleware);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/users", UserRoutes);

app.listen(PORT, () => {
	logger.info(`Server is running on port: ${PORT}`);
});
