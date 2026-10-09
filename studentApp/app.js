
const express = require("express");
const app = express();

const studentRoutes = require("./routes/studentRoutes");


app.use("/students", studentRoutes);

app.listen(8000, () => {
    console.log("Server connected");
});
