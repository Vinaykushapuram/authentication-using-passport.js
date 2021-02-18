
const { NotExtended } = require('http-errors');
const passport=require('passport');
const googlestrategy=require('passport-google-oauth20').Strategy;
const user=require('../models/user');

passport.serializeUser((user,done)=>
{
    done(null,user.id);

});

passport.deserializeUser((id,done)=>
{
    user.findById(id).then((user)=>
    {     
        done(null,user);
    });
  

});


passport.use(
    new googlestrategy({
       
        clientID:"$$$$",
        clientSecret:'$$$$$$$$',
        callbackURL:"/auth/google/redirect"
    } ,(acessToken,refreshToken,profile,done)=>
    {
   
           user.findOne({googleid:profile.id}).then((currentuser)=>
           {
               if(currentuser)
               {   console.log(currentuser);
                  done(null,currentuser);
               }
               else 
               {
                   user.create({name:profile.displayName,googleid:profile.id}).then((newuser)=>
                   {
                       console.log(newuser);
                       done(null,newuser);
                   });
               }
           });

    })
);
