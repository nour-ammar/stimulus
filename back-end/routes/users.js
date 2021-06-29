var express = require("express");
var router = express.Router();
var Student = require("../models/student");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Student.find({}, (err, result)=>{
    if(err){
      res.send(err)
    } 
    res.send(result)
  })
});

// create new student
router.post("/insert", (req, res, next) => {
  const std = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    level: req.body.level,
    classe: req.body.classe,
    levelOfApp: req.body.levelOfApp,
    pack: req.body.pack,
  };
  const student = new Student({
    firstName: std.firstName,
    lastName: std.lastName,
    email: std.email,
    phone: std.phone,
    level: std.level,
    classe: std.classe,
    levelOfApp: std.levelOfApp,
    pack: std.pack,
  });
  student.save();
  res.send("student added");

});

module.exports = router;
