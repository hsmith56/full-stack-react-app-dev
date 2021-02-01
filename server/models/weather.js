const request = require('request-promise');

const API_KEY = 'f52c67f5c2ad030c491e548b3579a217';

class Weather {
    static retrieveByCity (city, callback) {
        request({
            uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({error: 'Could not reach OpenWeatherMap API.'});
        });
    }
}

module.exports = Weather;