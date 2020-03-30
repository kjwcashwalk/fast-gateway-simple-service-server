var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let token = jwt.sign({ user_id: 'user_id'}, 'secret_key');
    console.log(`token : ${token}`);
    res.json({token});
});

module.exports = router;
