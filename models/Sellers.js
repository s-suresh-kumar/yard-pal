const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sellerSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Enter an email",
    // validation:
  },
  password: {
    type: String,
    trim: true,
    required: "Enter a password",
    // validation: at least 8 characters?
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
const Sellers = mongoose.model("Sellers", sellerSchema);
module.exports = Sellers;
