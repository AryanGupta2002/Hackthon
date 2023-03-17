const jwt = require("jsonwebtoken");
const Company = require("../models/Company");
const Startup = require("../models/Startup");
const User = require("../models/User");




module.exports.startupRegister = async (req,res)=>{
    const { name, email,password, domain,teamSize, uniqueId} = req.body
    try{
        const startupExist = await Startup.findOne({ email }) ||  await Company.findOne({ email }) ||  await User.findOne({ email }) ;
        if (startupExist) {
            return res.status(200).json({
              errors: [{ msg: "Email already exists" }],
            });
          }
          try {
            const startup = await Startup.create({
              name,
              email: email.toLowerCase(),
              password:password,
              domain,
              uniqueId,
              teamSize,
            });
  
        //     const token = createToken(user);
            res
          .status(200)
        //   .cookie("token", token, {
        //     expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        //     httpOnly: true,
        //   })
          .json({ success: true, startup });
  
  
        }catch(error) {
            return res.status(500).json({ error });
        }
     }catch(error) {
        return res.status(500).json({ error });
     }
  }

  module.exports.login = async (req,res) =>{
    const {email,password} = req.body
    console.log(email,password)
    try{
      const user = await Startup.findOne({ email:email.toLowerCase() }) ||  await Company.findOne({email:email.toLowerCase()}) ||  await User.findOne({ email:email.toLowerCase()}) ;
      if (user){
        if (password === user.password){
          localStorage.setItem(user)
          res
            .status(200)
            .json({ success: true, user});
        }else{ 
          return res.status(200).json({
            success: false,
          });
        }
      }
      else {
        return res.status(200).json({success: false})
      }
    }catch(e){
      return res.status(500).json({e})
    }
  }