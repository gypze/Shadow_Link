
const router = require('express').Router();
const { User } = require('../models');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes here: POST, PUT, DELETE

module.exports = router;
