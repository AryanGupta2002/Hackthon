const app = require('express');
const router = app.Router();
const {companyRegister} = require("../controllers/companyController")

router.post("/companyRegister", companyRegister);


module.exports = router;