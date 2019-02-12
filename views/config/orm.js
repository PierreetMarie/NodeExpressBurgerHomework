var connection = require("../config/connection.js");

var orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM "+table+";";
		connection.query(queryString, function(err, result){
			if (err) throw err;

			cb(result);
		});
	},
	insertOne: function(table, input, cb){
		var queryString = "INSERT INTO "+ table +" (burger_name) VALUES (?);";
		
		connection.query(queryString, [input],  function(err, result){
			if (err) throw err;

			cb(result);
		})

	},
	updateOne: function(table, columnName, inputValue, valueId, cb){
		var queryString = "UPDATE "+table+" SET "+columnName+" = "+inputValue;
		queryString += " WHERE id= "+valueId;
		connection.query(queryString, function(err, result){
			if (err) throw err;

			cb(result);
		})
	}
};

module.exports = orm;