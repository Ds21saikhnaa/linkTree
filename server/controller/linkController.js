const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { Link } = require("../models/linkModel");
const { MyError } = require("../utils/myError");
const { authorize } = require("../middleware/protect");

const getLinks = asyncHandler(async (req, res, next) => {
    const link = await Link.find({});
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
    const data = await Link.create({ ...req.body, userId });
    res.status(200).json({
        success: true,
        data
    });
});

const getUserLinks = asyncHandler(async (req, res, next) => {
    const user = await User.find({ name: req.params.name });
    if (!user.length) {
        throw new MyError("iim user bhgui bn!", 404);
    }
    const data = await Link.find({ userName: req.params.name, isHide: false }).sort({ updatedAt: -1 }).populate("userId").lean();
    res.status(200).json({
        success: true,
        user: user,
        data
    });
})

const getAdminLinks = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.userId);
    if (!user) {
        throw new MyError("iim user bhgui bn!", 404);
    }
    const data = await Link.find({ userName: req.userName }).sort({ updatedAt: -1 }).populate("userId").lean();
    res.status(200).json({
        success: true,
        user: user,
        data
    });
})

const deleteLink = asyncHandler(async (req, res, next) => {
    const data = await Link.findById(req.params.id);
    if (!data) {
        throw new MyError("iim link bhgui bn!", 404);
    }
    const create = data.userId.toString();
    const flag = authorize(create, req.userId);
    if (!flag) {
        throw new MyError("ene uildeliig hiihed tanii erh hurehgui!", 404);
    }
    data.remove();
    res.status(200).json({
        success: true
    });
})

const updateLink = asyncHandler(async (req, res, next) => {
    const data = await Link.findById(req.params.id);
    if (!data) {
        throw new MyError("iim link bhgui bn!", 404);
    }
    const create = data.userId.toString();
    const flag = authorize(create, req.userId);
    if (!flag) {
        throw new MyError("ene uildeliig hiihed tanii erh hurehgui!", 404);
    }
    for (let attr in req.body) {
        data[attr] = req.body[attr];
    }
    await data.save();
    res.status(200).json({
        success: true,
        data: data
    })
})
module.exports = { createLink, getUserLinks, getLinks, getAdminLinks, deleteLink, updateLink }
