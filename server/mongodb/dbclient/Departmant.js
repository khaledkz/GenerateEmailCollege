require("../connection");
const DepartmantSchema = require("../models/Departmant");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const Departmant = {
  addDepartmant: (query, callback) => {
    return DepartmantSchema.create(query).then(callback);
  },
  findDepartmant: callback => {
    return DepartmantSchema.find({}).then(callback);
  },
  findDepartmantById: (id, callback) => {
    return DepartmantSchema.findById(id).then(callback);
  },
  removeDepartmantById:(id,cb)=>{
    return DepartmantSchema.remove({_id:ObjectId(id)}).then(cb)
  },
  updateDepartmant:(id,query,cb)=>(
    DepartmantSchema.update({_id:ObjectId(id)},{$set: query},{upsert:true}).then(cb)
  )
};

module.exports = Departmant;
