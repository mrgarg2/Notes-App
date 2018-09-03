const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a:{
      demand : true,
      alias : 'address',
      describe : 'Address to get weather information for',
      string : true
    }
  })
  .help()
  .alias('help','h')
  .argv
//console.log(argv);

geocode.geocodeAddress(argv.address,(errorMessage, results) => {
    if(errorMessage){
      console.log(errorMessage);
    }
    else{
      weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults) => {
        if(errorMessage){
          console.log(errorMessage);
        }
        else{
          console.log(`Address : ${results.address}`);
      //    console.log(`Current Temp. is ${weatherResults.currtemp} but it feels like ${weatherResults.apparentTemp}`);
            console.log(JSON.stringify(weatherResults,undefined,2));
        }
      });
    }
});
