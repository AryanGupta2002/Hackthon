const app = require('express');
const router = app.Router();
const {startupRegister, allStartup} = require("../controllers/startupController")
const { login } = require('../controllers/startupController');

router.post("/startupRegister", startupRegister);
router.post("/login", login);
router.get("/allStartups", allStartup);

module.exports = router;