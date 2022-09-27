const express = require('express');
const router = express.Router();
const {seeOne} = require('../controller/controller.js')

/* GET home page. */
router.get('/', seeOne);

module.exports = router;
