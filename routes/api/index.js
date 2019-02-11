const router = require("express").Router();
const burgerRoutes = require("./burgerRoutes");

// set up routes and prefix them
router.use("/todos", todoRoutes);


module.exports = router;