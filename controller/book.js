const Book = require("../model/book");

exports.getBooks = (req, res, next) => {
  Book.findAll()
    .then((books) => {
      // console.log(books);
      // console.log(typeof books);
      res.render("books", {
        books: books,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getBook = (req, res, next) => {
  // console.log(req.params.id);
  Book.findByPk(req.params.id)
    .then((book) => {
      // console.log("Hi", book);
      res.render("book", {
        book,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddBook = (req, res, next) => {
  res.render("add-book");
};

exports.postAddBook = (req, res, next) => {
  //console.log("req.body type =", req.body);
  Book.create({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  })
    .then((result) => {
      // console.log(result);
      // console.log(result.dataValues);
      // console.log(typeof result);

      res.redirect("/books");
    })
    .catch((err) => {
      console.log(err);
    });
};
