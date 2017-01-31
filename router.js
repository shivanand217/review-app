// updating our path function for the handler

function route(handle,pathname,response,reviewdata){
  console.log("routing a request for " +pathname);

  // check if handler for that pathname exists or not
  if(typeof handle[pathname] === 'function'){
    // pass reviewdata to the handler also
    handle[pathname](response,reviewdata); // this is calling the handler function
  }
  else{
    console.log("no handle for pathname " +pathname);

    response.writeHead(404,{"Content-Type": "text/html"});  // 404 is for error or page not found
    response.write("Error 404 page not found");
    response.end();

  }
}

exports.route = route;
