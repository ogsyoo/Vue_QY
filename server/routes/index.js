var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const html = fs.readFileSync(path.resolve(__dirname, 'public/dist/index.html'), 'utf-8')
  res.send(html)
  res.render('index', { title: 'Express' });
});

module.exports = router;
