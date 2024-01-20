const express = require("express");
const Route = express.Router();

const loginController = require("../controller/login.controller");

Route.get("/", loginController.login);

module.exports = Route;
