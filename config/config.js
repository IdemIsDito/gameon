var development = {
  firebase: {
    rootRefUrl: "https://oefenwedstrijd.firebaseio.com",
    serverUID: "YOUR_GENERATED_UID",
    secretKey: "fir0ipJXOLRU9zn6LsthQRYJN7SX6vGPTzNJohy8"
  }
};

var test = {
  firebase: {
    rootRefUrl: "https://oefenwedstrijd.firebaseio.com",
    serverUID: "YOUR_GENERATED_UID",
    secretKey: "fir0ipJXOLRU9zn6LsthQRYJN7SX6vGPTzNJohy8"
  }
};

var production = {
  firebase: {
    rootRefUrl: process.env.FB_URL,
    serverUID: process.env.FB_SERVER_UID,
    secretKey: process.env.FB_SECRET_KEY
  }
};

var config = {
  development: development,
  test: test,
  production: production,
};
module.exports = config;
