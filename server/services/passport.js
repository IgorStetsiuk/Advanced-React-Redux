const User = require('../models/user');
const config = require('../config');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
  secretOrKey: config.session.secret,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

const localOptions = {
  usernameField: 'email'
};

passport.use(new LocalStrategy(localOptions,
  function (email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      user.comparePassword(password, function (err, isMatch) {
        if (err) return done(err);
        if (!isMatch) {
          return done(null, false)
        }
        return done(null, user)
      })
    });
  }
));

passport.use(new JwtStrategy(jwtOptions, ({ sub }, done) => {
  User.findOne({ _id: sub }, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));