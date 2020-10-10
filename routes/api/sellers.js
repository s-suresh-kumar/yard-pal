const express = require("express");

const router = express.Router();

const Seller = require("../../database/models/seller");
const passport = require("../../passport");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  Seller.findOne({ email }, (err, seller) => {
    if (err) {
      console.log("Seller Create Error: ", err);
      return;
    }

    if (seller) {
      res.json({
        error: `Sorry, already a seller with the email: ${email}`,
      });
      return;
    }

    const newSeller = new Seller({ email, password });

    newSeller.save((err, savedSeller) => {
      if (err) return res.json(err);

      res.json(savedSeller);
    });
  });
});

router.post(
  "/login",
  (req, res, next) => {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("LOGGED IN", req.email);
    res.send({
      email: req.email.email,
    });
  }
);

router.get('/', (req, res) => {
  if (req.email) {
    res.json({ email: req.email });
  } else {
    res.json({ email: null });
  }
});

router.post('/logout', (req, res) => {
  if (req.email) {
    req.logout();
    res.status(200).json({ msg: 'LOGGED OUT' });
  } else {
    res.status(404).json({ msg: 'NO SELLER TO LOGOUT' });
  }
});

module.exports = router;