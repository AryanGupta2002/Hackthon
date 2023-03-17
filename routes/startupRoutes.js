const app = require('express');
const router = app.Router();
const {startupRegister} = require("../controllers/startupController")

router.post("/startupRegister", startupRegister);


module.exports = router;