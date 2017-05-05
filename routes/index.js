const router = require('express').Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/video', (req, res, next) => {
  fs.readdir(path.resolve(__dirname, '../public/videos'), (err, files) => {
    if (err) return next(err);
    files = files.map(file =>  `videos/${file}`);
    res.render('video', { files });
  });
});

module.exports = router;
