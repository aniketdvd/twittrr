
# Twittrr
Just another simple NodeJS twitter bot for searching for tweets and posting tweets.
# How to use?
# Seaching for Tweets :bird:
* Run ```npm install``` in your command line to install the _twit_ package as the dependency.

* To use this bot, make sure you get API keys from **[Twitter API Keys](https://developer.twitter.com/en/apps)** by creating a Twitter app.
 
* API keys can be fed to the code with help of an *environment variable* of which an example is present as ```.env.sample```
Rename ```.env.sample``` to ```.env``` and paste the keys over there.
```
**Make sure that you type the API keys correctly!**

* The entry point is ```bot.js``` . Open the file and in the ```params```(the parameters object) - edit the queries as you like.
```
var params = {
	q: 'a burning topic',
	count: number of posts to fetch,
	lang: 'your preferred language'
}
```
* You are now ready to fire the bot. Run ```npm start``` or ```node bot``` in your command line :computer:

# Posting Tweets
```tweetbot.js``` posts your tweet with ```node tweetbot``` command in your command line.
