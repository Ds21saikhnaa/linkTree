const { Router } = require("express");
const { createLink, getUserLinks } = require("../controller/linkController");
const { protect } = require("../middleware/protect")
const linkRouter = Router();
linkRouter.use(protect);
linkRouter.route('/createLink').post(createLink);
linkRouter.route('/getLink/:name').get(getUserLinks);
module.exports = { linkRouter }