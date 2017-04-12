const twitter_pacakge = require( 'twitter' );
const assert          = require( 'assert' );
const env             = require( 'node-env-file' );

env( __dirname + '/.env' );

var secret = {

    consumer_key:        process.env.API_KEY,
    consumer_secret:     process.env.API_SECRET,
    access_token_key:    process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

const twitter = new twitter_pacakge( secret );

twitter.post( 'statuses/update',
    {
        status: 'Testing' 
    },

    function( error, tweet, response ) {

      if( error ) {

        console.log( error );
      }
});
