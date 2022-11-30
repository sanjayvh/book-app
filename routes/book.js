const router = require("express").Router();
const bookController = require("../controller/book");

router.get("/books", bookController.getBooks);

router.get("/book/:id", bookController.getBook);

router.get("/add-book", bookController.getAddBook);

router.post("/add-book", bookController.postAddBook);

// console.log("bookController type =", typeof bookController);

module.exports = router;
