const userModel = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { email, name, phone, password, role } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "Email already exists",
        error: "Email already already exists",
      });
    } else {
      let hashPassword = await bcrypt.hash(password, 10);
      let response = await new userModel({
        name,
        email,
        password: hashPassword,
        phone,
        role,
      });
      response = await response.save();
      res.status(201).json({ message: "user created successfully", response });
    }
  } catch (error) {
    console.log("Couldnot create USer", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

const getAllUser = async (req, res) => {
  try {
    // console.log(req.user)
    console.log("role>>>", req.user.role);
    if ((req.user.role = "admin")) {
      const showUser = await userModel.find();
      res.status(200).json({ message: "user found successfully", showUser });
    } else {
      res.status(403).json({ msg: "Not Authorized" });
    }
  } catch (error) {
    console.log("Error while getting user", error);
    res.status(500).json({ message: "Error while getting user", error });
  }
};
const getSingleUser = async (req, res) => {
  try {
    console.log(req.user);
    const responseUser = await userModel.findById(req.user._id);
    console.log(responseUser);
    res.status(200).json(responseUser);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};
const deleteUser = async (req, res) => {
  try {
    console.log(req.user.role);
    const id = req.params.id;
    if (req.user.role == "admin") {
      const deleteUser = await userModel.findByIdAndDelete({ _id: id });
      res.status(200).json({ message: "User deleted successfully",deleteUser });
    } else {
      res.send({ msg: "You are not allowed to delete the user" });
    }
  } catch (error) {
    console.log("Error", error);
  }
};

//updating user by admin

const editUser=async(req,res)=>{
     if(req.user.role=="admin"){
         let response= await userModel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
         res.status(200).json({message:"The user is updated",response})
     }
     else{
         res.status(400).json({message:"You are not allowed to edit user"})
     }
    
}


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      const isMatch = await bcrypt.compare(password, isExist.password);
      console.log(isMatch);
      if (isMatch) {
        const token = jwt.sign(
          { _id: isExist._id, role: isExist.role },
          "ddsvnbcvnevdcnwsmdnsahhbcdhjslbndvb",
          { expiresIn: "1hr" }
        );
        res.json({ msg: "Login Success", user: isExist, token: token });
      }
    } else {
      res.status(400).json({ msg: "Invalid Password" });
    }
  } catch (error) {
    console.log("Error from login ", error);
  }
};

module.exports = { createUser, getSingleUser, login, getAllUser, deleteUser,editUser };
