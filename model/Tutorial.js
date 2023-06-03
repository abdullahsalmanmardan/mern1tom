const mongoose = require("mongoose");

const TutorialSchema = new mongoose.Schema({
  title: String,
  author: String,
  image: [],
  //todo is tarha 1 to m relationship ban jata ha
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CommentSchema",
    },
  ],
  // todo is se category ka fk ban jay ga
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategorySchema",
    },
  ],
});

const TUTORIAL = mongoose.model("Tutorial", TutorialSchema);
module.exports = TUTORIAL;
