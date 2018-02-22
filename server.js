// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

/// Create express app
var app = express();
var PORT = process.env.PORT || 8080; 
app.use(bodyParser.urlencoded({extended: false}));   
app.use(bodyParser.json());
app.use(express.static("app/public"));
app.use(htmlRoutes);
app.use(apiRoutes);

// Listen to port
app.listen(PORT, function(){
	console.log("Running on port " + PORT);
});