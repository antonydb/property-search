const express = require('express');
const router = express.Router();
const results = require('./routes/results');

router.get('/results', results);

module.exports = router;
