// in order to handle the review data we need the querystring module
// this is a core module
var querystring = require('querystring');

function home_handler(response){
  console.log("executing 'home' handler");

  // now in this home function we are creating a form of html
  // this form will resond to a review

  var htmlfile = '<html>'+
  '<head>'+
  '<meta http-equiv = "Content-type" content = "text/html;charset=UTF-8"/>'+
  '</head>'+
  '<style>'+
  '.shiv{color: blue}'+
  '</style>'+
  '<body>'+
  '<form action="/review_handler" method="post" >'+
  '<textarea name="text" rows = "20" cols="60" class="shiv"></textarea>'+
  '<input class ="shiv" type="submit" value ="Submit text"/>'+
  '</form>'+
  '</body>'+
  '</html>';

  // now responding to the request
  response.writeHead(200,{"Content-type": "text/html"});
  response.write(htmlfile);
  response.end();

}

function review_handler(response,reviewdata){
  console.log("executing 'review' handler");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("your review is: "+querystring.parse(reviewdata).text);
  response.end();
}

// now export both the handler
exports.home_handler = home_handler;
exports.review_handler = review_handler;
