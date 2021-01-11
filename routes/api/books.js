const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// routes for when just /books/ is hit
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// routes for when /books/id is hit
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
