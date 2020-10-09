const express = require('express');

const router = express.Router();

const Seller = require('../../models/Sellers');
//const passport = require('../../passport');

router.post('/', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ email: username }, (err, user) => {
    if (err) {
      console.log('User Create Error: ', err);
      return;
    }

    if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }

    const newSeller = new Sellers({
      email: username,
      password: password
    });

    newSeller.save((err, savedUser) => {
      if (err) return res.json(err);

      res.json(savedUser);
    });
  });
});

router.post(
  '/login',
  (req, res, next) => {
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('LOGGED IN', req.user);
    res.send({
      username: req.user.username,
    });
  }
);
