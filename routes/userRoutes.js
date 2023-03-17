const app = require('express');
const router = app.Router();
const {userRegister} = require("../controllers/userController")

router.post("/userRegister", userRegister);


module.exports = router;