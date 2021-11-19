const express = require('express');
const cors = require('cors');
const posts = require('./app/posts');
const comments = require('./app/comments');
const users = require('./app/users');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const port = 8000;

app.use('/comments', comments);
app.use('/posts', posts);
app.use('/users', users);

const run = async () => {
  await mongoose.connect(config.db.url);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};

run().catch(e => console.error(e));

// fixtures.js