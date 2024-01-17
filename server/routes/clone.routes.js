const express = require('express');
const { Router } = require("express");

const clone = require("../controllers/cloner.controllers.js");

const router = Router();

router.post('/clone', clone);

module.exports = router;