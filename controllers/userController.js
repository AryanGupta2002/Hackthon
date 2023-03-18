const User = require("../models/User")
const Startup = require("../models/Startup")
const Company = require("../models/Company")
const jwt = require("jsonwebtoken");



// const createToken = (user) => {
//     return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });
//   };



module.exports.userRegister = async (req,res)=>{
    const { name, email,password, cv, phone, profession, skills,regno } = req.body
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
              skills,
              regno,
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

module.exports.allStudent = async (req,res) =>{
  try{
    const allStudents = await User.find({profession:"Student"})
    if(allStudents){
      return res.status(200).json({success:true, allStudents})
    }else{
      return res.status(200).json({success:false, error:"No Students Found"})
    }
  }catch(e){
    return res.status(500).json({success:false,error:e})
  }
}



module.exports.allDeveloper = async (req,res) =>{
  try{
    const allDevelopers = await User.find({profession:"Developer"})
    if(allDevelopers){
      return res.status(200).json({success:true, allDevelopers})
    }else{
      return res.status(200).json({success:false, error:"No Students Found"})
    }
  }catch(e){
    return res.status(500).json({success:false,error:e})
  }
}




module.exports.allProfessor = async (req,res) =>{
  try{
    const allProfessors = await User.find({profession:"Professor"})
    if(allProfessors){
      return res.status(200).json({success:true, allProfessors})
    }else{
      return res.status(200).json({success:false, error:"No Students Found"})
    }
  }catch(e){
    return res.status(500).json({success:false,error:e})
  }
}


module.exports.allAlumni = async (req,res) =>{
  try{
    const allAlumnis = await User.find({profession:"Alumni"})
    if(allAlumnis){
      return res.status(200).json({success:true, allAlumnis})
    }else{
      return res.status(200).json({success:false, error:"No Students Found"})
    }
  }catch(e){
    return res.status(500).json({success:false,error:e})
  }
}


