/** 
var mime = require('mime')
var express = require('express')
var app = express()
 
  
mime.Mime();  
mime.lookup("aaaaaa",null);
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

*/



var express = require('express')
var app = express()

function g(){ 
var mime = require('mime') 
mime.Mime();  
mime.lookup("aaaaaa",null); 
}
g();

app.get('/', function (req, res){ 
res.send('Hello World') 
})

app.listen(3000)
