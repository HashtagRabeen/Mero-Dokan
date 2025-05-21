const { createUser,getSingleUser, login,getAllUser,deleteUser,editUser } = require("../Controllers/userController");

const express = require("express");

const router = express.Router();
const AuthMid=require("../middlewares/authMid")

router.post("/createUser", createUser);
router.get("/getUser",AuthMid,getSingleUser);
router.get("/getAllUser",AuthMid,getAllUser);
router.post("/login", login); 
router.delete("/deleteUser/:id",AuthMid, deleteUser); 
router.put("/editUser/:id",AuthMid, editUser);

module.exports = router;
