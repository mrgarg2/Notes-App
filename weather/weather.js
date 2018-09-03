const request = require('request');


var getWeather = (lat,lng,callback) => {

  request({
    url: `https://api.darksky.net/forecast/e419c514995644829c4aba00aedd6f69/${lat},${lng}`,
    json: true

  }, (error,response,body) => {
    if(!error && response.statusCode === 200){
      callback(undefined,{
        temperature : body.currently.temperature,
        apparentTemperature : body.currently.apparentTemperature
      });
    }
    else{
      callback('Unable to get weather');
    }
  });
}

module.exports.getWeather = getWeather;
