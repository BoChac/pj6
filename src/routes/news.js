const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/hoc-khoa-js',newsController.show);

// '/' luôn nằm dưới 
router.get('/', newsController.index);


module.exports = router;