const express = require("express");
const Route = express.Router();

// const loginController = require("../controller/login.controller");

// Route.get("/", loginController.login);

Route.get("/", (req, res) => res.send("welcome"));

module.exports = Route;
