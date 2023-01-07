const { Router } = require("express");
const { createLink, getUserLinks, getLinks, getAdminLinks, deleteLink, updateLink } = require("../controller/linkController");
const { protect } = require("../middleware/protect")
const linkRouter = Router();
linkRouter.route('/links').get(getLinks);
linkRouter.route('/getLink/:name').get(getUserLinks);
linkRouter.use(protect);
linkRouter.route('/getAdmin').get(getAdminLinks);
linkRouter.route('/createLink').post(createLink);
linkRouter.route('/link/:id').delete(deleteLink).patch(updateLink);
module.exports = { linkRouter }