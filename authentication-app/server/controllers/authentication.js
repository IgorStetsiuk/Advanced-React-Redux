const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.signin = function (req, res, next) {
  res.send({ jwt: createJwtToken(req.user) })
};

exports.signup = function (req, res, next) {
  
  const { email, password } = req.body;
  
  
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' })
  }
  
  User.findOne({ email: email })
    .then(existingUser => {
      
      if (existingUser) {
        return res.status(422).send({ error: 'Email is in use' });
      }
      
      const user = new User({
        email,
        password
      });
      
      user.save()
        .then(savedUser => {
          res.json({ token: createJwtToken(user) })
        });
    })
    .catch(err => {
      console.log('Error in login ', err);
      next(err)
    });
};

function createJwtToken({ id }) {
  const { session: { secret } } = config;
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: id, iat: timestamp }, secret)
}