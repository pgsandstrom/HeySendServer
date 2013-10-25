var map = {};

var putValue = function(key, value) {
    map[key] = value;
};

var getValue = function(key) {
    return map[key];
};

var deleteValue = function(key) {
    delete map[key];
};


exports.put = putValue;
exports.get = getValue;
exports.delete = deleteValue;
