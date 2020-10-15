const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const multer = require("multer");

const mongooseConnection = require("./database");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// multer middleware for storing images
const storage = multer.diskStorage({ 
	destination: (req, file, cb) => { 
		cb(null, 'uploads') 
	}, 
	filename: (req, file, cb) => { 
		cb(null, file.fieldname + '-' + Date.now()) 
	} 
}); 

const upload = multer({ storage: storage }); 


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions
app.use(
  session({
    secret: "RANDOM STRING",
    store: new MongoStore({
      mongooseConnection,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
