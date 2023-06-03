const mongoose = require("mongoose");


const CommentSchema = new mongoose.Schema({
  username: String,
  text: String,

});


const COMMENT = mongoose.model("Comment", CommentSchema);

//* ab humin jaha jaha chahiyay we will use it for post to write data to database
module.exports =  COMMENT;
