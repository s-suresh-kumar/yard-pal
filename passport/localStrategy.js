const Seller = require('../database/models/seller');

const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
  },
  (email, password, done) => {
    Seller.findOne({ email }, (err, seller) => {
      if (err) {
        return done(err);
      }

      if (!seller) {
        return done(null, false, { message: 'Incorrect Email' });
      }

      if (!seller.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect Password' });
      }

      return done(null, seller);
    });
  }
);

module.exports = strategy;
