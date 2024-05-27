const express = require('express');
const router = express.Router();

const admindataControl = require('../../controllers/admindatacontroll');

router.get('/admindata', admindataControl.getadmindata);
router.post('/admindata', admindataControl.postadmindata);
router.put('/admindata/:id', admindataControl.updatePostadmindata);
router.get('/admindata/:id', admindataControl.getadmindataWithID);

module.exports = router;