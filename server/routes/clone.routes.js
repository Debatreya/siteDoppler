const express = require('express');
const { Router } = require("express");
const { clone, download } = require('../controllers/cloner.controllers');


const router = Router();

router.post('/clone', clone);
router.get('/download', download);

module.exports = router;