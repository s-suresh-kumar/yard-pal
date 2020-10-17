const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is required",
    validate: {
      validator: (v) => {
        // validates 99.99% of emails
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
    validate: {
      validator: (v) => {
        // between 8 & 15 charactors with at least
        // 1 lowercase letter
        // 1 uppercase letter
        // 1 numeric digit
        // 1 special character
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
          v
        );
      },
      message: () =>
        "Password must be between 8 to 15 characters and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
    },
  },
  goal: {
    type: Number,
    min: [0, "goal cannot be negative"],
  },
  revenue: {
    type: Number,
    default: 0,
    min: [0, "revenue cannot be negative"],
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
        validate: {
          validator: (v) => {
            return /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/.test(v);
          },
          message: (props) =>
            `${props.value} is not a valid price (<2 decimals)`,
        },
      },
      // picture
      image: {
        data: Buffer,
        contentType: String,
      }
    },
  ],
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
userSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("NO PASSWORD PROVIDED");
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
