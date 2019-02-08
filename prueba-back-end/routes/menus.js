var express = require('express');
var router = express.Router();

var menu = require('../controllers/MenuController.js');

/* GET Menu listing. */
router.get('/', menu.menus);

module.exports = router;