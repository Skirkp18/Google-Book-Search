const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// use /api then routes in page
router.use("/api", apiRoutes);

// create the router
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
