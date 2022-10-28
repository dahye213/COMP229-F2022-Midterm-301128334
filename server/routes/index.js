/*
  File name: COMP229-F2022-MIDTERM-301128334
  Author's name: Dahye Lee 
  Student ID: 301128334
  Web App name: comp229-f2022-301128334.herokuapp.com
*/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the employee model
let employee = require("../models/employees");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    employees: ""
  });
});


module.exports = router;
