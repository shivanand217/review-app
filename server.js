// we are creating our server through which the app runs

var http = require('http');
var url = require('url');

// for organising our code
// to create dependency route is passed as a parameter in the startserver

// 3. now adding second parameter handle
function startserver(route,handle){

  function onrequest(request,response){
     var reviewdata = "";

var pathname = url.parse(request.url).pathname;

console.log("request recieved for " + pathname);
// set encoding to UTF-8
request.setEncoding("utf-8");

request.addListener("data",function(chunk){
  reviewdata+=chunk;
});

// after all the chunks of data recieved
request.addListener("end",function(){
  route(handle,pathname,response,reviewdata);

});

    console.log("request recieved");

//2. now we are giving response by the router server wont respond
// hence we are now responding to requests

    /*1.
    response.writeHead(200,{"Content-type": "text/plain"});
    response.write("hello world from module");
    response.end(); */
  }
  http.createServer(onrequest).listen(8888);
  console.log("server started on localhost 8888");
}

exports.startserver = startserver;

/*
http.createServer(function(request,response){

  console.log("request recieved");
response.writeHead(200,{"Content-type":"text/plain"});
response.write("hello world");
response.end();

}).listen(8888);

console.log("server started on localhost port 8888");
*/

// run this via localhost: 8888
