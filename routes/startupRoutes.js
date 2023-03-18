const app = require('express');
const router = app.Router();
const {startupRegister, allStartup, searchUserById} = require("../controllers/startupController")
const { login } = require('../controllers/startupController');

router.post("/startupRegister", startupRegister);
router.post("/login", login);
router.get("/allStartups", allStartup);
router.post("/searchUserById",searchUserById );

module.exports = router;