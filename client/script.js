const url = "http://localhost:3000/books";

document.addEventListener("DOMContentLoaded", () => {
  const fetchBooks = async () => {
    try {
      const response = await fetch(url);
      const books = await response.json();
      displayBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const displayBooks = (books) => {
    const tableBody = document.querySelector("#books-table tbody");
    tableBody.innerHTML = "";
    books.forEach((book) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td>${book.editorial}</td>
            `;
      tableBody.appendChild(row);
    });
  };

  const addBook = async (book) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      const newBook = await response.json();
      fetchBooks();
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  const bookForm = document.getElementById("book-form");
  bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const book = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      year: document.getElementById("year").value,
      editorial: document.getElementById("publisher").value,
    };
    addBook(book);
    bookForm.reset();
  });

  fetchBooks();
});
