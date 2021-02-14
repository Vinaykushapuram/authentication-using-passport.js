
const passport=require('passport');
const googlestrategy=require('passport-google-oauth20');


passport.use(
    new googlestrategy({
        callbackURL:"/auth/google/redirect",
        clientID:"621709230888-hthrmq3qpvq0di2smkbd5t86qgehuktl.apps.googleusercontent.com",
        clientSecret:"yyUrhOhPXrNlwSK6fvgcVmaa"
    } ,(acessToken,refreshToken,profile,done)=>
    {
        console.log(profile);

    })
);