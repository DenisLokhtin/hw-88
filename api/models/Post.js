const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: function() {
      return this.file === 0;
    },
  },
  file: {
    type: String,
    required: function() {
      return this.description === 0;
    },
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;