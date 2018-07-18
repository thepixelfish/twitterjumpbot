var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var messages = ["Hello World! -hh", "poop brother -hh", "Did you know I am a robot? -hh"];
var messageLocation = 0;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    messageLocation += 1;
}

writeTweet()

setInterval(writeTweet, 30000);
