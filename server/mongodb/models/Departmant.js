const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: String,
    symbol:String,
    order:Number ,
    departmant:String,
 });

 

const Departmant = mongoose.model('departmant', schema);

module.exports = Departmant;