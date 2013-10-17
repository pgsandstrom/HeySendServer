var redis = require("redis");

var config = require("./config.js");

console.log('config: '+config);
console.log('config json: '+JSON.stringify(config));
console.log('config.redis: '+config.redis);
console.log('config.redis.port: '+config.redis.port);

var client = redis.createClient(config.redis.port, config.redis.host);

client.on("error", function (err) {
    console.log("Error " + err);
});

var authCallback = function () {
    console.log("auth callback");

    client.set("string key", "string val", redis.print);
    client.hset("hash key", "hashtest 1", "some value", redis.print);
    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    client.hkeys("hash key", function (err, replies) {
        console.log(replies.length + " replies:");
        replies.forEach(function (reply, i) {
            console.log("    " + i + ": " + reply);
        });
        client.quit();
    });
};

client.auth(config.redis.password, authCallback);
