const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { MyError } = require("../utils/myError");

const register = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);
    const token = user.getJsonWebToken();
    res.status(200).json({
        success: true,
        data: user,
        token
    });
});

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new MyError("email bolon nuuts ugee damjiilna uu!", 404);
    }
    //tuhain hereglegchig haina
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        throw new MyError("email bolon nuuts ugee zow oruulna uu!", 401);
    }
    const pass = await user.checkPassword(password);

    if (!pass) {
        throw new MyError("email bolon nuuts ugee zow oruulna uu!", 401);
    }
    res.status(200).json({
        success: true,
        token: user.getJsonWebToken(),
        data: user,
    });
});

module.exports = { login, register }