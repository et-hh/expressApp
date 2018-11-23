var express = require('express');
var router = express.Router();

var minify = require('html-minifier').minify;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', { title: 'Express' });
});

/* GET home page. */
router.get('/hh', function(req, res, next) {
  res.render('hh/index', { title: 'Express' }, function(err, html) {
    res.send(minify(html,{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true}));
  });
});

module.exports = router;
