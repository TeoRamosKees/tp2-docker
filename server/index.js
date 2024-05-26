import express from "express";
import cors from "cors";
import booksRouter from "./routes/books.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books/", booksRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
