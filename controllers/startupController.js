const jwt = require("jsonwebtoken");
const Startup = require("../models/Startup");




module.exports.startupRegister = async (req,res)=>{
    const { name, email,password, domain,teamSize, uniqueId} = req.body
    try{
        const startupExist = await Startup.findOne({ email });
  
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