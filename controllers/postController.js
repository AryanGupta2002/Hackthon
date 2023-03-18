const User = require("../models/User")
const Startup = require("../models/Startup")
const Company = require("../models/Company")



module.exports.userPost = async (req,res) =>{
    const {id} = req.body
    try{
        const allPost = await Post.findOne({ email }) ||  await Company.findOne({ email }) ||  await User.findOne({ email }) ;
    }catch{
      
    }
  }