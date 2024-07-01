const express = require("express");
const routerAPI = express.Router();
const {
  getUserAPI,
  postCreateUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/users", getUserAPI);

routerAPI.post("/users", postCreateUserAPI);

module.exports = routerAPI;
