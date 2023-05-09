const express = require('express');
const router = express.Router();
const editController = require('../controller/editController');

router.get('/edit/:id', editController.getEdit);
router.post('/edit/:id', editController.postEdit);
module.exports = router;