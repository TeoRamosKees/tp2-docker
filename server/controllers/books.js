import services from "../services/books";

const getAllBooks = async (_, res) => {
  try {
    const books = await services.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createBook = async (req, res) => {
  try {
    const bookData = req.body;
    const book = await services.createBook(bookData);
    res.json(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

export default { getAllBooks, createBook };
