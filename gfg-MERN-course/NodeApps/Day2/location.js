var request = require('request');

module.exports = function(callback) {
    let api = `http://ipinfo.io`;

    request({
        url: api,
        json: true
    }, function(error, response, body) {
        if (error) {
            callback(`Unable to fetch the location: ${error}`);
        }else {
            callback(body.city);
        }
    });
};

