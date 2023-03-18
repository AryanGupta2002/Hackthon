const app = require('express');
const router = app.Router();
const {userRegister,allAlumni, allStudent,allDeveloper,allProfessor} = require("../controllers/userController")

router.post("/userRegister", userRegister);
router.get("/allStudents", allStudent);
router.get("/allProfessors", allProfessor);
router.get("/allDevelopers", allDeveloper);
router.get("/allAlumnis", allAlumni);



module.exports = router;