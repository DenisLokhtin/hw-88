const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;