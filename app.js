var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookiesession=require('cookie-session');
var auth = require('./routes/auth');
var mongoose=require('mongoose');
const passport = require('passport');
var profileroute=require('./routes/profile');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connecting to database
mongoose.connect('mongodb+srv://vinay:vinay@oauth@oauth.lcpxu.mongodb.net/oauth?retryWrites=true&w=majority',{useNewUrlParser: true}).then().catch((err)=>console.log(err));


app.use(cookiesession(
  {
    maxAge:5*60*1000,
    keys :['adadadasssdy']
  }
))
//initializing passport
app.use(passport.initialize());
app.use(passport.session());



app.use('/auth', auth);
app.use('/profile',profileroute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
