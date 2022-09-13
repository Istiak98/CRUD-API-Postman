const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videosSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('Video', videosSchema)