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

/* GET employee List page. READ */
router.get("/", (req, res, next) => {
  // find all employee in the employee_detail collection
  employee.find((err, employees) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("employees/index", {
        title: "Employees",
        employees: employees
      });
    }
  });
});

//  GET the Employee Details page in order to add a new employee
router.get("/add", (req, res, next) => {
  employee.find((err, employees)=>{
  if(err){
    console.log(err);
    res.end(err);
  } else {
    res.render("employees/add", {
      title:"Add an employee",
      employee : employees,
    });
  }
});
});

// POST process the Employee Details page and create a new Employee - CREATE
router.post("/add", (req, res, next) => {
  let newEmployee = employee({
    Employeeid: req.body.Employeeid,
    Employeename: req.body.Employeename,
    Department: req.body.Department,
    Designation: req.body.Designation,
    Salary: req.body.Salary
  });

  employee.create(newEmployee, (err, employee) =>{
    if (err){
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/employees');
    }
  });
});

// GET the Employee Details page in order to edit an existing Employee
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  employee.findById(id, (err, editEmployee) =>{
    if(err){
      console.log(err);
      res.end(err);
    } else {
      res.render('employees/edit', {title: 'Edit Employee', employees: editEmployee});
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id ;

  let updateEmployee = employee({
    _id: id,
    Employeeid: req.body.Employeeid,
    Employeename: req.body.Employeename,
    Department: req.body.Department,
    Designation: req.body.Designation,
    Salary: req.body.Salary
  });

  employee.updateOne({_id: id}, updateEmployee, (err) => {
    if(err){
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/employees');
    }
  });
});

// GET - process the delete by specific employeename
router.get("/delete", (req, res, next) => {
  // let name = req.params.Employeename;
  // console("name" + name);
  // employee.deleteOne({Employeename: name}, (err) =>{
  employee.deleteOne({Employeename: "Dahye"}, (err) =>{
    if(err){
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/employees');
    }
  });

});

module.exports = router;
