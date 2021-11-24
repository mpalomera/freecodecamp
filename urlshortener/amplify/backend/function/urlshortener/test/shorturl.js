//set a reference to the request module
var request = require('request'),
    //stubs
    postData = {},
    postConfig = {},
    postSuccessHandler = null;

//create an object to send as POST data
postData = {
    url: 'https://slashdot.org'
};

//the config for our HTTP POST request
postConfig = {
    url: 'https://rvtc3gfly7.execute-api.us-east-1.amazonaws.com/dev/api/shorturl',
    body: postData,
    json: true
};

//the HTTP POST request success handler
postSuccessHandler = function(err, httpResponse, body) {
    //look for this message in your JS console:
    if (err) {
        return console.log({ err });
    }
    console.log('JSON response from the server: ' + JSON.stringify(body));
};

//make the POST request
request.post(postConfig, postSuccessHandler);
