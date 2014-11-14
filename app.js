var express = require('express')
var app = express()

app.get('/', function (req, res) {
 var a=parseInt(req.param('a'));
 var b=parseInt(req.param('b'));
 var operator=req.param('operator');
 var answer = calculator(a,b,operator);
 res.send("hello world");

})
function calculator(x, y, oper){
	if(oper==="plus")
	{
		return x + y;
	}
	else if(oper==="minus"){
		return x-y;
	}
	else if(oper==="multiply"){
		return x*y;
	}
	else if(oper==="divide"){
		return x/y;
	}
}

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})