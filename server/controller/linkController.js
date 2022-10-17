const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { Link } = require("../models/linkModel");
const { MyError } = require("../utils/myError");

const createLink = asyncHandler(async (req, res, next) => {
    const userId = req.userId;
    console.log(userId);
    const user = await User.findById(userId);
    if(!user){
        throw new MyError("iim user bhgui bn!", 404);
    }
    const result = await Link.create({...req.body,userId });
    res.status(200).json({
        success: true,
        result
    });
});

const getUserLinks = asyncHandler(async(req, res, next) => {
    const userId = req.userId;
    const links = await Link.find({name: req.params.name}).populate("userId").lean();
    if(!links){
        throw new MyError("iim user bhgui bn!", 404);
    }
    res.status(200).json({
        success: true,
        links
    });
})


module.exports = { createLink, getUserLinks}