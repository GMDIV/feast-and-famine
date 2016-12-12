var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var browserify = require('browserify-middleware');
var path = require('path');
 



app.use(express.static(path.join(__dirname, '/../client/')))
app.use (bodyParser.json());

app.get('/app-bundle.js',
	browserify('./client/components/App.jsx', {
		transform: [ [ require('babelify'), { presets: ["es2015", "react"] } ] ]
	})
)