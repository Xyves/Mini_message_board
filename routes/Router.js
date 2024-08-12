const express = require("express");
const Router = express.Router();
const usersController = require("../controllers/controller");

Router.get("/", usersController.getUsers);
Router.get("/new", usersController.createUsernameGet);
Router.post("/new", usersController.createUsernamePost);
module.exports = Router;
