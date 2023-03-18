const app = require('express');
const router = app.Router();
const {createGroupPost, getPost, addApplicant,getPostById} = require("../controllers/postController")

router.post("/createGroupPost", createGroupPost);
router.post("/getPost",getPost );
router.post("/getPostById",getPostById );
router.post("/addApplicant",addApplicant );

module.exports = router;