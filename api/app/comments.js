const express = require('express');
const Comment = require('../models/Comment');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.send(comments);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  if (!req.body.comment || !req.body.postId || !req.body.date) {
    return res.status(400).send('Data not valid');
  }

  const commentData = {
    comment: req.body.comment,
    postId: req.body.postId,
    date: req.body.date,
  };

  const comment = new Comment(commentData);

  try {
    await comment.save();
    res.send(comment);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;