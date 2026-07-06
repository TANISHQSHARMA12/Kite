const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post('/', userVerification);

module.exports = router;
