var request = require('request');

var geocode = (address) => {

  var encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    JSON: true
  }, (error, response, body) => {
    console.log(body);
  });

};

geocode('110052');

// geocode.then((location) => {
//   console.log(JSON.stringify(location,undefined,2));
// }, (errorMessage) =>{
//   console.log(errorMessage);
// });
