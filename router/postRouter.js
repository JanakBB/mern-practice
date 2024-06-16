const express = require('express');
let getPost = require('../controller/postController');

const router = express.Router();

router.get('/get', getPost);

module.exports = router;