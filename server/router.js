const express = require('express');
const search = require('./routes/search');

const router = express.Router();

router.use('/search', search);

module.exports = router;
