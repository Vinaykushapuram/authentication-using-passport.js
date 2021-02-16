

const passport=require('passport');
const googlestrategy=require('passport-google-oauth20');
const user=require('../models/user');

passport.use(
    new googlestrategy({
        callbackURL:"/auth/google/redirect",
        clientID:"621709230888-hthrmq3qpvq0di2smkbd5t86qgehuktl.apps.googleusercontent.com",
        clientSecret:"yyUrhOhPXrNlwSK6fvgcVmaa"
    } ,(acessToken,refreshToken,profile,done)=>
    {
   
           user.findOne({googleid:profile.id}).then((currentuser)=>
           {
               if(currentuser)
               {
                  done(null,currentuser);
               }
               else 
               {
                   user.create({name:profile.displayName,googleid:profile.id}).then((newuser)=>
                   {
                       console.log(newuser);
                   }).catch((err)=>console.log (err))
               }
           }).catch((err)=>console.log(err));
    })
);