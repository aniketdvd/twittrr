console.log('Tweet post bot starting');

var twit = require('twit');

var config = {
    consumer_key:  process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}
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