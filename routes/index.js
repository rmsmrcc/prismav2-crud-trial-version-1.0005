var express = require('express');
var router = express.Router();
const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient
const indexController = require('../controller/indexController');
router.get('/home', indexController.getIndex );

module.exports = router;
