const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    username: String,
    firstname:String,
    lastname:String,
    username:String,
    wegimail:String,
    emailAddress:String,
    password:String,
    isAdmin:Boolean,
    phoneNumber:Boolean ,
    departmantSym:String   
});

const Account = mongoose.model('account', schema);

module.exports = Account;