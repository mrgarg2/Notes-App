const request = require('request');

var geocodeAddress = (address,callback) => {

  var encodedAddress = encodeURIComponent(address);
//  console.log(encodedAddress);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
  }, (error, response, body) =>{
  //  console.log(JSON.stringify(response, undefined, 2));
    if(error)
    {
      callback('Could not connect to Google Servers');
    }
    else if(body.status === 'ZERO_RESULTS'){
      callback('Could not find the Address');
    }
    else if(body.status === 'OK')
    {
      var results = {
        address : body.results[0].formatted_address,
        latitude : body.results[0].geometry.location.lat,
        longitude : body.results[0].geometry.location.lng
      };
      callback(undefined,results);
    }
  });

};

module.exports = {
  geocodeAddress
};
