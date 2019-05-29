var express = require("express");
var router = express.Router();
var burgers = require('../models/burgers.js')
var orm = require("../config/orm")

router.get('/', function(req, res){
  burgers.all(function(data){
    var burObj = {
      burgers: data
    };
    console.log(burObj);
    // res.json(data)
    res.render('index', {data})
  })
})

router.post("/api/burgers", function(req, res) {
  console.log(req.body.data.name)
  burgers.create(['burger', 'devourit'], [req.body.data.name, 0], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "burgerID = " + req.params.id;
  // console.log("params "+params)
  console.log("condition", condition);
  // console.log("req-body --> "+JSON.stringify(req.body))
  burgers.update({
    devourit: req.body.devourit
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
