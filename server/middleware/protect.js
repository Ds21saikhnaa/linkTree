const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { MyError } = require("../utils/myError.js");
const protect = asyncHandler(async (req, res, next) => {
    //https://linktree-production.up.railway.app/
    if (!req.headers.authorization) {
        throw new MyError("ene uildeliig hiihed tanii erh hurehgui bn. Ta ehleed newtrej oroh ystoi!", 401);
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        throw new MyError("Ta ehleed newtrej oroh ystoi!", 400);
    }

    const tokenObj = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = tokenObj.id;
    req.userName = tokenObj.name;
    next();
});

const authorize = (createUser, nowUser) => {
    if (createUser != nowUser) {
        return false
        //throw new MyError(`Tanii erh ene uildlig hiihed hureltsehgui!`, 403);
    } else {
        return true
    }
}

module.exports = { protect, authorize }