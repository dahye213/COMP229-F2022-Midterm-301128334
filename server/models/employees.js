/*
  File name: COMP229-F2022-MIDTERM-301128334
  Author's name: Dahye Lee 
  Student ID: 301128334
  Web App name: comp229-f2022-301128334.herokuapp.com
*/

let mongoose = require("mongoose");

// create a model class
let Employee = mongoose.Schema(
  {
    Employeeid: Number,
    Employeename: String,
    Department: String,
    Designation: String,
    Salary: Number,
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", Employee);
