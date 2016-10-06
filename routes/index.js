var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '艾艾贴' });
});
router.get('/news/1', function(req, res, next) {
  res.render('news/1', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});

module.exports = router;
