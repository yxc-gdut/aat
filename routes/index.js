var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '艾艾贴' });
});
router.get('/news/1', function(req, res, next) {
  res.render('news/1', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});
router.get('/aat', function(req, res, next) {
  res.render('aat', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});
router.get('/news', function(req, res, next) {
  res.render('news', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});
router.get('/product', function(req, res, next) {
  res.render('product', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});
router.get('/success', function(req, res, next) {
  res.render('success', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});
router.get('/aijiu', function(req, res, next) {
  res.render('aijiu', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});
router.get('/join', function(req, res, next) {
  res.render('join', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚' });
});

module.exports = router;
