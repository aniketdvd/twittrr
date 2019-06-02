console.log('TWITTRR is starting');

var twit = require('twit');

var config = require('./config');
//console.log(config);
var twitObejct = new twit(config);

var params = {
    q: '#opensource',
    count: 10,
    lang: 'en'
};

twitObejct.get('search/tweets', params, (err, data, response) => {
    let tweets = data.statuses;
    for(let i = 0; i < tweets.length; ++i){
        console.log(tweets[i].text, '\n\n\n\n\n');
    }
})