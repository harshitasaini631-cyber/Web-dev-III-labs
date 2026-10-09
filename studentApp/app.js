
const express = require("express");
const app = express();

const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());


app.use("/students", studentRoutes);

app.use((req, res) => {
  res.status(404).send({ msg: "Route not found" });
});

app.listen(8000, () => {
  console.log("Server connected");
});
