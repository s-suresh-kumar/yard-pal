const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define sellerSchema
const sellerSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Enter an email",
    // validation
  },
  password: {
    type: String,
    unique: true,
    trim: true,
    required: "Enter a password",
    // validation
  },
  goal: {
    type: Number,
  },
  revenue: {
    type: Number,
    default: 0,
  },
  items: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the item",
      },
      description: {
        type: String,
        trim: true,
      },
      price: {
        type: Number,
        required: "Enter a price for the item",
        // validation: $XX.XX 2 decimal places
      },
      // picture ?
    },
  ],
});

// Define schema methods
sellerSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
sellerSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("NO PASSWORD PROVIDED");
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const seller = mongoose.model("seller", sellerSchema);

module.exports = seller;
