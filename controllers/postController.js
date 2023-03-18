const User = require("../models/User")
const Startup = require("../models/Startup")
const Company = require("../models/Company")
const Post = require("../models/CompanyPost")



module.exports.getPost = async (req,res) => {
    const {type} = req.body
    console.log(type)
    try {
        const post = await Post.find({type:type})
        return res
        .status(200)
        .json({ success:true, allPosts: post });
    }catch(e){
        return res.status(500).json({success:false,error:e})
    }
}


module.exports.createGroupPost = async (req, res) =>{
    const {userId, type, link,name} = req.body
    try{

        const post = await Post.create({
            userId: userId,
            name:name,
            link:link,
            type:type
        })

        return res
        .status(200)
        .json({ success:true, newPost: post });
    }catch(error){
        return res.status(500).json({success:false,error:error})
    }

}



module.exports.addApplicant = async (req,res)=>{
    const {id, link, name } = req.body
    try{
        const post = await Post.findById({_id: id})
        if(post){
            console.log(post)
        }
        var newApp = {link,name}
        var old_app = post.applicants
        var applications = [...old_app,newApp]
        post.applicants = applications
    console.log(applications)
        await post.save()
        return res.json({ msg: "Skills Updated", post });
    }catch(e){
        return res.status(500).json({error:e, success: false})
    }
}


module.exports.getPostById = async (req,res)=>{
    const {id, link, name } = req.body
    try{
        const post = await Post.findById({_id: id})
        if(!post){
            return res.status(200).json({success:false, error:"Have't Posted Yet" });
        }
        return res.json({ success:true, allPosts:post });
    }catch(e){
        return res.status(500).json({error:e, success: false})
    }
}