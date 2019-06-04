console.log('Tweet post bot starting');

var twit = require('twit');

var config = require('./config');
var twitObject = new twit(config);

var tweet = {
    status: "hey it's my tweet bot speakin' man! #nodejs"
};

twitObject.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log("Something went wrong");
    }
    else {
        console.log("Boom! worked!");
    }
    console.log(data);
}