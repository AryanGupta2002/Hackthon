const jwt = require("jsonwebtoken");
const Company = require("../models/Company");
const Startup = require("../models/Startup");
const User = require("../models/User");


module.exports.companyRegister = async (req,res)=>{
    const { name, email,password, domain,website} = req.body
    try{
        const companyExist =  await Startup.findOne({ email }) ||  await Company.findOne({ email }) ||  await User.findOne({ email }) ;
  
        if (companyExist) {
            return res.status(200).json({
              success:false, error:"Email already Exist"
            });
          }
          try {
            const company = await Company.create({
              name,
              email: email.toLowerCase(),
              password: password,
              domain,
              website,
            });
  
        //     const token = createToken(user);
            res
          .status(200)
        //   .cookie("token", token, {
        //     expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        //     httpOnly: true,
        //   })
          .json({ success: true, company });
  
  
        }catch(error) {
            return res.status(200).json({success: false, error:"Try Again"});
        }
     }catch(error) {
        return res.status(200).json({success: false, error:"Try Again"});
     }
  }