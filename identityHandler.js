var crypto = require('crypto');
var redis = require('./redisHandlerMock.js');
var gcm = require('./gcmHandler.js');

var registerDevice = function(gcmKey, name) {

    if(name === null) {
    var hash = crypto.createHash('sha512').update(gcmKey + 'random string from config').digest("hex");
        name = hash.substring(0,4);
        //TODO check so it is unique, do something if not
    }

    redis.put(name, gcmKey);

    return name;
};

var registerBrowser = function(name) {
    var gcmKey = redis.get(name);
    return gcmKey !== null;
};

var push = function(name, url) {
    var gcmKey = redis.get(name);
    gcm.sendUrl(gcmKey, url);
};

exports.registerDevice = registerDevice;
exports.registerBrowser = registerBrowser;
exports.push = push;