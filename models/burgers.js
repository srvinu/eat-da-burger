var orm = require("../config/orm.js");
var burgers = {
  all: function(cb){
    orm.all(function(res){
      cb(res);
      // console.table(res)
    });
  },
  create: function(cols, vals, cb) {
		orm.create('burger', cols, vals, function(res) {
			cb(res);
		});
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },



}



module.exports = burgers
