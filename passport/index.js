const passport = require('passport');

const LocalStrategy = require('./localStrategy');
const Seller = require('../database/models/seller');

passport.serializeUser((seller, done) => {
  done(null, { _id: seller._id });
});

passport.deserializeUser((id, done) => {
  Seller.findOne({ _id: id }, 'email', (err, seller) => {
    done(null, seller);
  });
});

//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;
