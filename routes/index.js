var express = require('express');
var api = require('../src/api');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '艾艾贴', selected:'index' });
});
router.get('/news/1', function(req, res, next) {
  res.render('news/1', { title: '三分钟了解艾灸', selected:'news' });
});
router.get('/news/2', function(req, res, next) {
  res.render('news/2', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'news' });
});
router.get('/news/3', function(req, res, next) {
  res.render('news/3', { title: '艾养生丨红豆薏米粥祛湿？90%的人都犯了这几个错误', selected:'news' });
});
router.get('/aat', function(req, res, next) {
  res.render('aat', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'aat' });
});
router.get('/news', function(req, res, next) {
  res.render('news', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'news' });
});
router.get('/product', function(req, res, next) {
  res.render('product', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'product'  });
});
router.get('/success', function(req, res, next) {
  res.render('success', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'success'  });
});
router.get('/aijiu', function(req, res, next) {
  res.render('aijiu', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'aijiu'  });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'contact'  });
});
router.get('/join', function(req, res, next) {
  res.render('join', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'join'  });
});
router.get('/shop', function(req, res, next) {
  res.render('shop', { title: '艾灸知识大全丨艾艾贴，引领健康养生新时尚', selected:'shop'  });
});
router.post('/api/*', function(req, res, next) {
  api.main(req, res, next);
});

module.exports = router;
