require('dotenv').config();

console.log('TWITTRR is starting...');

var twit = require('twit');

console.log(process.env);

var config = {
    consumer_key:  process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

var twitObejct = new twit(config);

var params = {
    q: 'devops',
    count: 20,
    lang: 'en'
};

twitObejct.get('search/tweets', params, (err, data, response) => {
    let tweets = data.statuses;
    for(let i = 0; i < tweets.length; ++i){
        console.log(tweets[i].text, '\n\n');
    }
})
