# Liri-Node-App

First Node.js assignment at the Penn Coding Bootcamp!

LIRI is a Language Interpretation and Recognition Interface.

## How it works

LIRI works in the CLI (Command Line Interface) and accepts four possible commands:

> + `concert-this`
> + `spotify-this-song`
> + `movie-this`
> + `do-what-it-says`

The first three commands should always be followed by a search string:

| Command | Search String | Example |
| :------: | :-----------: | :------------: |
| concert-this | _name of an artist or band_ | rolling stones |
| spotify-this-song | _name of a song_ | bohemian rhapsody |
| movie-this | _name of a movie_ | back to the future |

The fourth command will read and run the command and the search string saved in a `random.txt` file, separated by comma. For example:
```shell
concert-this,Justin Timberlake
```

## Examples

```shell
node liri.js concert-this rolling stones
Name of the Venue: Hard Rock Stadium
Venue Location: Miami Gardens, FL
Date of the Event: 04/20/2019
```

```shell
node liri.js spotify-this-song bohemian rhapsody
Artist: Queen
Song: Bohemian Rhapsody - Remastered 2011
Spotify URL: https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J
Album: A Night At The Opera (Deluxe Remastered Version)
```

```shell
node liri.js movie-this back to the future
Title: Back to the Future
Released in 1985
IMDB Rating: 8.5/10
Rotten Tomatoes Rating: 96%
Country of production: USA
Language: English
Plot: Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.
Actors: Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover
```

```shell
node liri.js do-what-it-says
Name of the Venue: Chesapeake Energy Arena
Venue Location: Oklahoma City, OK
Date of the Event: Tomorrow at 7:30 PM
```

The results are displayed in the CLI, and also saved in a `log.txt` file.

## Demo



## Under the hood

This app uses the following NPM packages:

> + Axios
> + Node-Spotify-API
> + Moment
> + DotEnv

It also leverages the following APIs:

> + Bands In Town
> + Spotify
> + OMDb
