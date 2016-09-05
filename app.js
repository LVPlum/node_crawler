var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function (req, res) {
  request('http://www.jikexueyuan.com/course/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      console.log(body);
      res.json({
        'Classnum':$('.aside-cList li').length
      });
    };
  })
});

app.listen(3000);

