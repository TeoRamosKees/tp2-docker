import PouchDB from "pouchdb";
import books from "../data/books";

const db = new PouchDB("http://admin:admin@couchdb:5984/books");

const getAllBooks = async () => {
  try {
    const result = await db.allDocs({ include_docs: true, attachments: true });
    const books = result.rows.map((row) => row.doc);
    return books;
  } catch (err) {
    throw new Error("Error fetching all books.");
  }
};

const createBook = async (bookData) => {
  try {
    const result = await db.post(bookData);
    return result;
  } catch (err) {
    throw new Error("Error creating book.");
  }
};

const randomBook = () => {
  const index = Math.floor(Math.random() * books.length);
  return books[index];
};

setInterval(() => {
  createBook(randomBook());
}, 5000);

export default { getAllBooks, createBook };
