const express = require("express");
const app = express();
const Twit = require("twit");

const config = {
    consumer_key: "Your_Consumer_Key",
    consumer_secret: "Your_Consumer_Secret",
    acces_token: "Your_Acess_Token",
    access_token_secret: "Your_access_token_secret"
};

const T = new Twit(config);


T.post("statuses/update", {status: "hello world"}, function(err, data, response){
    if(err){
        console.log("Error posting tweet", err);
    } else {
        console.log("Tweet posted successfully", data.text);
    }
});


app.listen(4000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server Started Successfully.");
    }
  });