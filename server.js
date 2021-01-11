const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// port when live and port when local
const PORT = process.env.PORT || 3001;


// middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if in production environment then set variable to production and use static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// get routes
app.use(routes);

// connect to mongoDB local as well as variable for when live on heroku
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// start listening
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
