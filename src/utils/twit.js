require('dotenv').config();
const Twit = require('twit');

const T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

const tweet = async (tweet) => {
    return T.post("statuses/update",  { status: tweet })
}

module.exports = {tweet}