const app = require('express');
const router = app.Router();
const {startupRegister} = require("../controllers/startupController")
const { login } = require('../controllers/startupController');

router.post("/startupRegister", startupRegister);
router.post("/login", login);

module.exports = router;