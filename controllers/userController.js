const User = require("../models/User")
const Startup = require("../models/Startup")
const Company = require("../models/Company")
const jwt = require("jsonwebtoken");



// const createToken = (user) => {
//     return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });
//   };



module.exports.userRegister = async (req,res)=>{
    const { name, email,password, cv, phone, profession, skills } = req.body
    try{
        const userExist = await Startup.findOne({ email }) ||  await Company.findOne({ email }) ||  await User.findOne({ email }) ;

        if (userExist) {
            return res.status(200).json({
              success:false, error:"Email already Exist"
            });
          }
          try {
            const user = await User.create({
              name,
              email: email.toLowerCase(),
              password: password,
              cv,
              phone,
              profession,
              skills
            });

        //     const token = createToken(user);
            res
          .status(200)
        //   .cookie("token", token, {
        //     expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        //     httpOnly: true,
        //   })
          .json({ success: true, user });


        }catch(error) {
          console.log(error)
            return res.status(200).json({ success: false, error:"Try Again" });
        }
     }catch(error) {
      console.log(error)
        return res.status(200).json({ success: false, error:"Try Again" });
     }
}



