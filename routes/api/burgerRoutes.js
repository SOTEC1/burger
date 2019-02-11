const router = require("express").Router();
const burgerController = require("../../controllers/burgerController");

// define API routes

// when user hits /api/todos
router
  .route("/")
  .get(burgerController.findAll)
  .post(burgerController.createTodo);


// when user hits /api/todos/:id
router
  .route("/:id")
  .get(burgerController.findById)
  .put(burgerController.updateTodo)
  .delete(burgerController.deleteTodo);

module.exports = router;