const router = require("express").Router();
const googleController = require("../../controllers/googleController");

//what to do when hitting the google/ route does
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
