const { response } = require("express");
const express = require("express");
const app = express();
const logger = require("./Utilities/logger");
app.get("/books", (request, response, next) => {
  response.send(
    JSON.stringify({
      book1: "2 states",
      book2: "Robin sharma",
      book3: "Human psychology",
    })
  );
});

app.get("/libraries", (request, response, next) => {
  app.use((request, response, next) => {
    if (request.url === "/libraries") {
      console.log(request.url);
    }
    next();
  });
  response.send(
    JSON.stringify({
      Permission: true,
    })
  );
});
app.get(" /authors", (request, response, next) => {
  app.use((request, response, next) => {
    if (request.url === "/authors") {
      console.log(request.url);
    }
    next();
  });
  response.send(
    JSON.stringify({
      Permission: true,
    })
  );
  console.log("We are in middleware 1");
});
module.exports = app;
