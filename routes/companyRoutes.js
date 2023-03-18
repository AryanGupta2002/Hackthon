const app = require('express');
const router = app.Router();
const {companyRegister, allCompany} = require("../controllers/companyController")

router.post("/companyRegister", companyRegister);
router.get("/allCompanies", allCompany);


module.exports = router;