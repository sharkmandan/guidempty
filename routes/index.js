var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
	  title: '00000000-0000-0000-0000-000000000000',
	  guidempty: '00000000-0000-0000-0000-000000000000',
	  partials: {
		  intro: 'intro',
		  list: 'list',
		  import: 'import',
		  lunch: 'lunch'
	  }
  });
});

module.exports = router;
