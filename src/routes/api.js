const express = require("express");

const routerAPI = express.Router();

const { getUserAPI } = require("../controllers/apiController");

routerAPI.get("/", (req, res) => res.send("Hello from API"));

routerAPI.get("/abc", (req, res) =>
  res.status(201).json({
    data: "hello from API/abc",
  })
);

routerAPI.get("/users", getUserAPI);

module.exports = routerAPI;
