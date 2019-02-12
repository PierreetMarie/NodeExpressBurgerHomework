var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();


// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + "/public"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


//set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//put routes to use
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

//listen on port 3000
app.listen(port);