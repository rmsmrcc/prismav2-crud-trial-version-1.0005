const express = require('express');
const router = express.Router();
const createController = require('../controller/createController');

router.get('/create', createController.getCreate);
router.post('/create', createController.postCreate);
module.exports = router;

