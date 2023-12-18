const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

app.set("view engine", "ejs");

app.use("/", require("./router/login.routes"));

const PORT = process.env.PORT || 9325;
app.listen(PORT, console.log(`Server started at port ${PORT}`));
