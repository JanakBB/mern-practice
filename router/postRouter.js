const express = require('express');
let postUser = require('../controller/postController');

const router = express.Router();

router.get('/get', postUser);

module.exports = router;