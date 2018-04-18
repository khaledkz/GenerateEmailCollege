require("../connection");
const User = require("../models/User");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const UserDB = {
  addUser: (query, callback) => {
    return User.create(query).then(callback);
  },
  findUser: callback => {
    return User.find({}).then(callback);
  },
  findUserById: (id, callback) => {
    return User.findById(id).then(callback);
  },
  removeUserById:(id,cb)=>{
    return User.remove({_id:ObjectId(id)}).then(cb)
  }
};

module.exports = UserDB;
