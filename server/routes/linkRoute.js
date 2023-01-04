const { Router } = require("express");
const { createLink, getUserLinks, getLinks } = require("../controller/linkController");
const { protect } = require("../middleware/protect")
const linkRouter = Router();
// linkRouter.use(protect);
linkRouter.route('/links').get(getLinks);
linkRouter.route('/createLink').post(protect, createLink);
linkRouter.route('/getLink/:name').get(getUserLinks);
module.exports = { linkRouter }