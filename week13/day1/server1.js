//Lets require/import the HTTP module
var http = require('http');

//We need a function which handles requests and send response
function handleRequest(request, response) {
    console.log('hey someone accesed my server!');
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);
var port  = 8080;
//Lets start our server
server.listen(port, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", port);
});