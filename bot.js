var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var response = Math.floor(Math.random() * 13);

var messages = ["No","Nope, Jump isn't out","No jump today my friend.","いいえ","JUMP IS NOT OUT",
                "I'm sorry. No jump today.","When does jump come out? Not today unfortunately",
                "negative", "no way","nah","no siree","I wish jump was out today :'(","Fat chance!",
                "go fish"];
var messageLocation = response;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    //messageLocation += 1;
}

writeTweet()

//setInterval(writeTweet, 15000);
