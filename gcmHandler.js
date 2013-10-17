var gcm = require('node-gcm');
var config = require("./config.js");

var sender = new gcm.Sender(config.gcm.apiKey);


var sendUrl = function (phoneId, url) {
    var registrationIds = [phoneId];

    console.log("sengin to: "+phoneId);
    console.log("sengin: "+url);

    var message = new gcm.Message({
        collapseKey: 'demo',
        delayWhileIdle: true,
        timeToLive: 3,
        data: {
            url: url
        }
    });

    /**
     * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
     */
    sender.send(message, registrationIds, 4, function (err, result) {
        console.log(result);
    });
};

exports.sendUrl = sendUrl;