
const express = require("express");
const app = express();
const timeLoggerMiddleware = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());
app.use(timeLoggerMiddleware);

app.use("/students", studentRoutes);

app.use((req, res) => {
  res.status(404).send({ msg: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server connected");
});
