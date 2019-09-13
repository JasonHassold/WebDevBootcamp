var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var request = require('request');
request('http://www.google.com', function(err, res, body){
    if (err) {
        console.log("ERROR!");
        console.log(err);
    } else if (res.statusCode == 200) {
        console.log(body);
    }
});