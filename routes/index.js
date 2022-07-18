var express = require('express');
var router = express.Router();

var jsonData = require('../dataset/dataset.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: jsonData.page_meta.title,
                        h1: jsonData.page_meta.h1,
                        metaKeywords: jsonData.page_meta.meta_keywords,
                        metaDescription: jsonData.page_meta.meta_description,
                        nav: jsonData.nav,
                        breadcrumbs: jsonData.breadcrumbs,
                        stock: jsonData.stock,
                        pageText: jsonData.page_text,
                        layout: './layouts/body-layouts'
                      });
});

module.exports = router;
