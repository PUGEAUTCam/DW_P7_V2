const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const postCtrl = require('../controllers/post');

router.post('/', auth, multer, postCtrl.createPost);

module.exports = router;