import express from "express";
import booksRouter from "./routes/books.js";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/books/", booksRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
