// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});

    var test = require('./test.js');

    var redisTest = require('./redisHandler.js');

//    var gcm = require('./gcmHandler.js');
//    gcm.sendUrl('APA91bEltngzQTYTuZjnKFl-8x0g-HFN8_oH7GZ-vjmvYemF21_mZnjRckJydXETzQL7f90r5DTD9N1nfLWx-6R5DK0Fh9OO2zH9O1q6kGCOmb8yyDCuzpvoUIIsBs4OmBHvSp_yyzPyFPZTo7-CpxbIFKTY_t7XW45XI4K63eSwQ3gVL18MiBU',
//        'http://dn.se');

    response.end("Hello World: " + test.hej() + "\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");