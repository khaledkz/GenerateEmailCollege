var express = require("express");
var router = express.Router();
const DepartmantDb = require("../../mongodb/dbclient/Departmant");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("departmant/menu");
});
router.get("/edit", function(req, res, next) {
  res.render("departmant/searchMenu");
});
router.get("/add", (req, res, next) => {
  res.render("departmant/add");
});
router.post("/add", (req, res, next) => {
  cb = () => res.redirect("/departmant/edit/all");
  DepartmantDb.addDepartmant(req.body, cb);
});
router.get("/edit/all", (req, res, next) => {
  cb = data => {
    res.render("departmant/list", { data });
  };
  DepartmantDb.findDepartmant(cb);
});
router.get("/edit/all/:singleDepartmant", (req, res, next) => {
  const { singleDepartmant } = req.params;
  cb = data => res.render("departmant/single", { data });
  DepartmantDb.findDepartmantById(singleDepartmant, cb);
});
router.get("/delete/:singleDepartmant", (req, res, next) => {
  const { singleDepartmant } = req.params;
  cb = () => res.redirect("/departmant/edit/all");
  DepartmantDb.removeDepartmantById(singleDepartmant, cb);
});
router.get("/update/:id", (req, res, next) => {
  const { id } = req.params;
   cb = (data) => res.render("departmant/edit",{data});
   DepartmantDb.findDepartmantById(id, cb);
});
router.post("/update/:id", (req, res, next) => {
  const { id } = req.params;
  cb = () => res.redirect(`/departmant/edit/all`);
  DepartmantDb.updateDepartmant(id,req.body,cb);
});



module.exports = router;
