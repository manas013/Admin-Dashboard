const express = require('express');
const router = express.Router();

const dropdowndataControl = require('../../controllers/dropdowndataControl');

router.get('/dropdowndata', dropdowndataControl.getdropdowndata);

module.exports = router;