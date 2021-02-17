

var express=require('express');
var router=express.Router();

var authcheck=(req,res,next)=>
{
    if(!req.user)
    {
        res.redirect('/auth');
    }
    else
    {
        next();
    }
}


router.get('/',authcheck,(req,res,next)=>
{
     res.send('this is :' +req.user.name);

});


module.exports=router;
