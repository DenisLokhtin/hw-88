const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const userData = {
      username: req.body.username,
      password: req.body.password,
    };

    const user = new User(userData);

    user.generateToken();
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/sessions', async (req, res) => {
  const user = await User.findOne({username: req.body.username});

  if (!user) {
    return res.status(401).send({message: 'data is incorrect!'});
  }

  const isMatch = await user.checkPassword(req.body.password);

  if (!isMatch) {
    return res.status(401).send({message: 'data is incorrect!'});
  }

  user.generateToken();
  await user.save({validateBeforeSave: false});

  res.send({message: 'Successfully!', user});
});

module.exports = router;