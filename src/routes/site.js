const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');

router.use('/search',SiteController.search);
// '/' luôn nằm dưới 
router.use('/', SiteController.index);


module.exports = router;