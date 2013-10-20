var http = require('http');
//var redis = require('./redisHandler.js');
var gcm = require('./gcmHandler.js');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

    var url_parts = url.parse(request.url, true);

//    console.log("hej: "+url_parts);
//        console.log("hej: "+JSON.stringify(url_parts));

    switch (url_parts.pathname) {
        case '/':
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("Hello. Please do stuff");
            break;
        case '/device/register/':
        case '/device/register':
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("lol\n");
            break;
        case '/browser/register/':
        case '/browser/register':
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("lol\n");
            break;
        case '/push/':
        case '/push':
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("lol\n");
            break;
        default:
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("Stuff not recognized\n");
            break;
    }


//    gcm.sendUrl('APA91bEltngzQTYTuZjnKFl-8x0g-HFN8_oH7GZ-vjmvYemF21_mZnjRckJydXETzQL7f90r5DTD9N1nfLWx-6R5DK0Fh9OO2zH9O1q6kGCOmb8yyDCuzpvoUIIsBs4OmBHvSp_yyzPyFPZTo7-CpxbIFKTY_t7XW45XI4K63eSwQ3gVL18MiBU',
//        'http://dn.se');


});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");