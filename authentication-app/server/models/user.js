const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { bcryptConfig: { saltRounds } } = require('../config');


// Define user model
const userSchema = new Schema({
  email: {
    type: 'String',
    unique: true,
    lowercase: true
  },
  password: String
});

// On Save Hook, encrypt password
userSchema.pre('save', function (next) {
  
  
  bcrypt.hash(this.password, saltRounds, (err, hash) => {
    if (err) {
      return next(err)
    }
    
    console.log('this', this.password);
    // Store hash in your password DB.
    this.password = hash;
    next();
  });
  
  
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password)
    .then(isMatch => {
      return callback(null, isMatch);
    })
    .catch(err => {
      callback(err)
    });
};

// Create the model class
const UserModel = mongoose.model('User', userSchema);

// Export the model
module.exports = UserModel;