const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    username: String     
});

const Account = mongoose.model('account', schema);

module.exports = Account;