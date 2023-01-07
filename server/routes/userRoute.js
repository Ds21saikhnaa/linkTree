const { Router } = require("express");
const { login, register, deleteAcc } = require("../controller/userController");
const { protect } = require("../middleware/protect");
const userRouter = Router();
userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
userRouter.route('/user/:id').delete(protect, deleteAcc);
module.exports = { userRouter }