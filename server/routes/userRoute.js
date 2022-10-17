const { Router } = require("express");
const { login, register } = require("../controller/userController");
const userRouter = Router();
userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
module.exports = { userRouter }