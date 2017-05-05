var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/video', (req, res, next) => {
    res.render('video');
});

module.exports = router;
