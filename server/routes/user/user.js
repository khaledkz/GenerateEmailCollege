var express = require("express");
var router = express.Router();
const UserDB = require("../../mongodb/dbclient/User");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("user/menu");
});

router.get("/edit", function(req, res, next) {
  res.render("user/searchMenu");
});

router.get("/add", (req, res, next) => {
  res.render("user/add");
});

router.post("/add", (req, res, next) => {
  cb = () => {
    res.redirect("/user/edit/all");
  };
  UserDB.addUser(req.body, cb);
});

router.get("/edit/all", (req, res, next) => {
  cb = data => {
    console.log(data);
    res.render("user/list", { data });
  };
  UserDB.findUser(cb);
});
router.get("/edit/all/:singleUser", (req, res, next) => {
  const { singleUser } = req.params;
  cb = data => res.render("user/single", { data });
  UserDB.findUserById(singleUser, cb);
});
router.get("/delete/:singleUser", (req, res, next) => {
  const { singleUser } = req.params;
  cb = () => res.redirect("/user/edit/all");
  UserDB.removeUserById(singleUser, cb);
});
router.get("/update/:id", (req, res, next) => {
  const { id } = req.params;
   cb = (data) => res.render("user/edit",{data});
   UserDB.findUserById(id, cb);
});

module.exports = router;
