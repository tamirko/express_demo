var mime = require('mime')
var express = require('express')
var app = express()
 
 
 
 mime.lookup();
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
