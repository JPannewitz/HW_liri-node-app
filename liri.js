function initialCommands() {
	if (process.argv[2] === "my-tweets") {

		// var Twitter = require("twitter");

		

		// var client = new Twitter('./keys.js'.twitterKeys)

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '6QaEOmp3YiqnQO0oKM3UIfPHR',
  consumer_secret: 'D9nbf6tOa704BtmWJml3YOMGp40QkUFxSPZaZZxFWcKeFp2gZt',
  access_token_key: '848752093032730625-mpvogatVKB1nPOTqBoRgjd4USBJjmgI',
  access_token_secret: '2QLseXmuh9gDT4s97aDjhUgSIVM3Gv1YrIhJanDIqFaYn',
});
 
var params = {screen_name: 'juliasayshiLIRI'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (var i=0; i < tweets.length; i ++) {
    console.log(tweets[i].text);
	}
  }
});


} else if (process.argv[2] === "spotify-this-song") {
	var spotify = require('spotify');
 
	spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {
 	
    var singerName = data.tracks.items[0].artists[0].name;
    var songName = data.tracks.items[7].name;
	var album = data.tracks.items[1].album.name;
	var spotifyLink = data.tracks.items[4].external_urls.spotify;

	console.log("Artist Name: " + singerName);
	console.log("Song Name: " + songName);
	console.log("Album: " + album);
	console.log("Spotify Link: " + spotifyLink)
	
} 

});
} else if (process.argv[2] === "movie-this") {
	var request = require('request');
	request("http://www.omdbapi.com/?t=" + process.argv[3], function (error, response, body) {
  		if (!error && response.statusCode === 200) {
  			var title = JSON.parse(body).Title;
  			var year = JSON.parse(body).Year;
  			var imdbRating = JSON.parse(body).imdbRating;
  			var country = JSON.parse(body).Country; 
  			var lang = JSON.parse(body).Language;
  			var plot = JSON.parse(body).Plot;
  			var actors = JSON.parse(body).Actors;

  			console.log("Movie Title: " + title);
  			console.log("Year: " + year);
  			console.log("imdb Rating: " + imdbRating);
  			console.log("Country: " + country);
  			console.log("Language: " + lang);
  			console.log("Plot: " + plot);
  			console.log("Actors: " + actors);


  		}
});
}
} 

 if (process.argv[2] === "do-what-it-says") {
	var fs = require("fs");
	fs.readFile("random.txt", "utf8", function(error,data) {
		console.log(data);
		var fileCommand = data.split(",");
		process.argv[2] = fileCommand[0];
		process.argv[3] = fileCommand[1];
		initialCommands();
	});
}

initialCommands();