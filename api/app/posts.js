const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');
const Post = require('../models/Post');
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const Posts = await Post.find({}).populate('Users', 'username');
    res.send(Posts);
  } catch (e) {
    res.sendStatus(500);
    console.log(e)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const Post = await Post.findById(req.params.id);

    if (Post) {
      res.send(Post);
    } else {
      res.status(404).send({error: 'Post not found'});
    }
  } catch {
    res.sendStatus(500);
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  if (!req.body.title || !req.body.userId || !req.body.date) {
    return res.status(400).send({error: 'Invalid data'});
  }

  const PostData = {
    title: req.body.title,
    userId: req.body.userId,
    date: req.body.date
  };

  if (req.file) {
    PostData.image = 'uploads/' + req.file.filename;
  }

  if (req.body.description) {
    PostData.description = req.body.description;
  }

  const post = new Post(PostData);

  try {
    await post.save();
    res.send(post);
  } catch {
    res.status(400).send({error: 'Data not valid'});
  }
});

module.exports = router;