var express = require('express');
var router = express.Router();
 const passport=require('passport');
const passportSetup=require('../config/passport-setup')
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/google',passport.authenticate('google',
{
  scope:['profile']
})
);
router.get('/google/redirect',passport.authenticate('google'),(req,res,next)=>
{
  res.send("you are logged in using google");

});



module.exports = router;
