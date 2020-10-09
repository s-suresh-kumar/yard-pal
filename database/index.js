//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const dbName = "yard-pal";

mongoose
  .connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`)
  .then(
    () => {
      console.log(`CONNECTED TO MONGO DB ${dbName}`);
    },
    (err) => {
      console.log(`ERROR CONNECTING TO MONGO DB ${dbName}`, err);
    }
  );

module.exports = mongoose.connection;
