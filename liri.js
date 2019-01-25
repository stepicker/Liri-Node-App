// Setting up the application with its dependencies

require("dotenv").config();

var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var fs = require("fs");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


// Receiving the user input and storing it in two key variables

var command = process.argv[2];

var searchString = "";

for (var i = 3; i < process.argv.length; i++) {
    searchString = searchString + process.argv[i] + "+";
}

searchString = searchString.slice(0, -1);

if (command === "spotify-this-song" && searchString === "") {
    searchString = "The Sign Ace of Base";
};


// Creating the logging function for later use

var logResult = function(log) {

    fs.appendFile("log.txt", log, function(err) {
        if (err) {
          return console.log(err);
        }
      });

}


// Creating the main function with its four cases

var runApp = function(command, searchString) {

// 1. Processing a Concert request

if (command === "concert-this") {

    var queryUrl = "https://rest.bandsintown.com/artists/" + searchString + "/events?app_id=" + keys.bit.key;

    axios.get(queryUrl).then(function(response) {
        var result = ("Name of the Venue: " + response.data[0].venue.name + "\n" + "Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + "\n" + "Date of the Event: " + moment(response.data[0].datetime).calendar() + "\n" + "----------" + "\n");
        console.log(result);
        logResult(result);
    }
);

}

// 2. Processing a Song request

else if (command === "spotify-this-song") {

    spotify.search({ type: 'track', query: searchString }, function(err, data) {

        if (err) {
          return console.log("Error occurred. " + err);
        }
        
        var result = ("Artist: " + data.tracks.items[0].album.artists[0].name + "\n" + "Song: " + data.tracks.items[0].name + "\n" + "Spotify URL: " + data.tracks.items[0].external_urls.spotify + "\n" + "Album: " + data.tracks.items[0].album.name + "\n" + "----------" + "\n");

        console.log(result);
        logResult(result);

      });

}

// 3. Processing a Movie Request

else if (command === "movie-this") {

    var queryUrl = "https://www.omdbapi.com/?t=" + searchString + "&plot=short&apikey=" + keys.omdb.key;

    axios.get(queryUrl).then(function(response) {

        var result = ("Title: " + response.data.Title + "\n" + "Released in " + response.data.Year + "\n" + "IMDB Rating: " + response.data.Ratings[0].Value + "\n" + "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n" + "Country of production: " + response.data.Country + "\n" + "Language: " + response.data.Language + "\n" + "Plot: " + response.data.Plot + "\n" + "Actors: " + response.data.Actors + "\n" + "----------" + "\n");

        console.log(result);
        logResult(result);

    }
);

}

// 4. Processing a do-what-it-says request

else if (command === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        var dataArr = data.split(",");
      
        command = dataArr[0];
        searchString = dataArr[1];

        runApp(command, searchString);

      });

}

}

runApp(command, searchString);