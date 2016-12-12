var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var browserify = require('browserify-middleware');
var path = require('path');
 



app.use(express.static(path.join(__dirname, '/../client/')))
app.use (bodyParser.json());

app.get('/app-bundle.js',
	browserify('./client/index.jsx', {
		transform: [ [ require('babelify'), { presets: ["es2015", "react"] } ] ]
	})
)


 app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'));
 });

var port = process.env.PORT || 4000;


app.listen(port, function() {
	console.log("Listening on " + port);
});