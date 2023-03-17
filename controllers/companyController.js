const jwt = require("jsonwebtoken");
const Company = require("../models/Company");




module.exports.companyRegister = async (req,res)=>{
    const { name, email,password, domain,website} = req.body
    try{
        const companyExist = await Company.findOne({ email });
  
        if (companyExist) {
            return res.status(200).json({
              errors: [{ msg: "Email already exists" }],
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
            return res.status(500).json({ error });
        }
     }catch(error) {
        return res.status(500).json({ error });
     }
  }