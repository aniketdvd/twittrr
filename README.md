
# Twittrr
Just another simple NodeJS twitter bot for searching for tweets and posting tweets.
# How to use?
* Run ```npm install``` in your command line to install the _twit_ package as the dependency.

* Would be cool if you get yourselves the **[Twitter API Keys](https://developer.twitter.com/en/apps)** by creating an app.
Don't hesitate making a new account if you think you will mess-up :wink:
 
* Put the keys you just got by creating the new Twitter App in ```config.js``` not a big deal.
```
consumer_key: 'your key',
consumer_secret: 'again, your key',
access_token: 'and again, your key',
access_token_secret: 'pretty obvious, your key again'
```
**Make sure that you type the API keys correctly!**

* The file being the entry point in the project is ```bot.js``` . Open the file and in the ```params```, the parameters object and edit the queries as you like.
```
var params = {
	q: 'a burning topic',
	count: number of posts to fetch,
	lang: 'your preferred language'
}
```
* You are now ready to fire the bot. Run ```npm start``` or ```node bot``` in your command line :computer: