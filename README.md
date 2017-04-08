# HW_liri-node-app
Homework Assignment Week 10


## Description on how to use the app
LIRI is a command line node application that take in parameters and gives back information.  You can use it to retrive tweets and get movie and song info!

## Requirements

- Use specified node packages and APIs to get parameters to request info the user is asking for
- my-tweets returns 20 latest tweets from my twitter using npm package and twitter API (requires keys)
- spotify-this-song and song title will print the following info to command line: artist, album, song name, and spotify url using Spotify npm package and API
- movie-this and movie name will pring the following info to the command line: title, year, IMDB rating, country, language, plot and actors using Request npm package and OMDB API
- do-what-it-says will take the text inside of random.txt and then use it to call one of LIRI's commands

## Technologies Used

- Node.js used to add functionality to liri.js file in command line
- Node packages (Twitter, Spotify, Request) to grab info from APIs (Twitter, Spotify, OMDB)


## Code Explaination
- registered for Twitter API keys
- researched NPM packages for Twitter, Spotify, and Request and followed rules in documentation to receive desired information 
- created functions in Javascript file to wait for certain parameters being passed in command line to call on results

-------------