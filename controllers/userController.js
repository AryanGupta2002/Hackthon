const User = require("../models/User")
const jwt = require("jsonwebtoken");
const Company = require("../models/Company");



// const createToken = (user) => {
//     return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });
//   };



module.exports.userRegister = async (req,res)=>{
    const { name, email,password, cv, phone, profession, skills } = req.body
    try{
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(200).json({
              errors: [{ msg: "Email already exists" }],
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
            return res.status(500).json({ error });
        }
     }catch(error) {
        return res.status(500).json({ error });
     }
}



