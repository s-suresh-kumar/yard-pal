const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const User = require("../../database/models/user");
const passport = require("../../passport");

router.post("/", (req, res) => {
  console.log("req", req);
  const { username, password } = req.body;
  console.log("fired POST");

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User Create Error: ", err);
      return;
    }

    if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }

    const newUser = new User({
      username: username,
      password: password,
    });

    newUser.save((err, savedUser) => {
      if (err) return res.json(err);

      res.json(savedUser);
    });
  });
});

router.post(
  "/login",
  (req, res, next) => {
    console.log("hit route post  /login");
    console.log("req", req);
    console.log("res", res);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("req", req);
    console.log("LOGGED IN", req.user);
    res.send({
      username: req.user.username,
    });
  }
);

router.get("/", (req, res) => {
  console.log("hit route get /");
  console.log("req", req);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  console.log("hit route post /logout");
  console.log("req", req);
  if (req.user) {
    req.logout();
    res.status(200).json({ msg: "LOGGED OUT" });
  } else {
    res.status(404).json({ msg: "NO USER TO LOGOUT" });
  }
});

// sale items add
router.put("/addItem", (req, res) => {
  console.log("hit route put /addItem");
  // console.log("req", req);
  if (req.user) {
    //add items to document
    console.log("in if req.user");

    // create object to add to items array in db
    const itemToAdd = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      img: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
    };

    // add item to db
    User.findOneAndUpdate(
      { username: req.user.username },
      { $push: { items: itemToAdd } },
      { safe: true, upsert: true, new: true, runValidators: true }
    )
      .then((dbItems) => {
        console.log("findoneandupdate success");
        res.json(dbItems);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.status(404).json({ msg: "NO SELLER LOGGED IN" });
  }
});

//sale item delete
router.put("/delItem", (req, res) => {
  console.log("hit route put /delItems");
  console.log("req", req);
  if (req.user) {
    //del items to document
    console.log("in if req.user");
    User.findOneAndUpdate(
      { username: req.user.username },
      { $pull: { items: { _id: req.body.itemId } } },
      { safe: true, upsert: true }
    )
      .then((dbItems) => {
        console.log("findoneandupdate for delete success");
        res.json(dbItems);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.status(404).json({ msg: "NO SELLER LOGGED IN" });
  }
});

module.exports = router;
