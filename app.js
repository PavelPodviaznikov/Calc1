var express = require('express')
var app = express()
var a;
var b;
var operator;
var answer;

app.get('/', function (req, res) {
 a=req.param('a');
 b=req.param('b');
 operator=req.param('operator');
 a = parseInt(a);
 b = parseInt(b);
 calculator(a,b,operator);
 res.send(answer.toString());

})
function calculator(x, y, oper){
	if(oper==="plus")
	{
		answer = x + y;
	}
	else if(oper==="minus"){
		answer = x-y;
	}
	else if(oper==="multiply"){
		answer = x*y;
	}
	else if(oper==="divide"){
		answer = x/y;
	}
}

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})