const { Router } = require("express");
const { postReq, getReq } = require("../controller/userController");
const userRouter = Router();
userRouter.route('/').get(getReq);
userRouter.route('/login').post(postReq);
module.exports = { userRouter }