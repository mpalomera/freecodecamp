const express = require('express');
const router = express.Router()

router.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/exercisetracker.html');
});

module.exports = router;
