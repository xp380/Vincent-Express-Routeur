const express = require('express');
const news = require('../data/tags');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(news);
  });

  
  
module.exports = router;
