var express = require('express');
var router = express.Router();


// GET Test page
router.get('/test', function(req, res) {
	console.log(req)
	res.send(req)
	
});



module.exports = router;