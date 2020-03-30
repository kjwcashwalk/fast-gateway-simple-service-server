var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let user_info = JSON.parse(req.headers.decoded);
  res.json({'msg': `service1의 users id: ${user_info.user_id}`});
});

module.exports = router;
