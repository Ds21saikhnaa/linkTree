const asyncHandler = require("express-async-handler");

const getReq = asyncHandler(async(req, res, next) => {
    const data = {
        name: "hello",
        age: 12
    }
    res.status(200).json({
        success: true,
        user: data,
        //token
    });
});

const postReq = asyncHandler(async(req, res, next) => {
    const user = req.body;
    res.status(200).json({
        success: true,
        user: user,
    });
});

module.exports = {postReq, getReq}