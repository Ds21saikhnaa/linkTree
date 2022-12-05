const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { Link } = require("../models/linkModel");
const { MyError } = require("../utils/myError");

const getLinks = asyncHandler(async (req, res, next) => {
    const link = await Link.find();
    res.status(200).json({
        success: true,
        data: link
    });
})

const createLink = asyncHandler(async (req, res, next) => {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
        throw new MyError("iim user bhgui bn!", 404);
    }
    req.body.userName = req.userName;
    const result = await Link.create({ ...req.body, userId });
    res.status(200).json({
        success: true,
        result
    });
});

const getUserLinks = asyncHandler(async (req, res, next) => {
    const links = await Link.find({ userName: req.params.name }).populate("userId").lean();
    if (!links) {
        throw new MyError("iim user bhgui bn!", 404);
    }
    res.status(200).json({
        success: true,
        links
    });
})


module.exports = { createLink, getUserLinks, getLinks }