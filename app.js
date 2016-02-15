// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// Read data.txt Sync - Blocking

// var fileContents = fs.readFileSync('data.txt');

// Create Express App Object \\
var app = express();

// Read data.txt Async - Non-Blocking

fs.readFile('data.txt', function(err, data){

	var fileContents = data

	// Routes \\
	app.get('/', function(req, res){
	  res.header('Content-Type', 'text/html')
	  res.send(fileContents)
	})

})

//Read User File
app.get('/:filename', function(req, res){

  var fileContents = fs.readFileSync("./public/" + req.params.filename)
  
  res.header('Content-Type', 'text/html')
  res.send(fileContents)
});

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})


