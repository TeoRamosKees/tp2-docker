import { postBook, getBooks } from './utils/utils'

async function addBook(bookData) {
    const result = await postBook(bookData);
    if (result) {
        console.log('Book posted successfully:', result);
    } else {
        console.log('Failed to post book');
    }
}

document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    addBook(data);

    let books = getBooks;
    var table = document.getElementById('table');
    books.forEach(function(book) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + book.title + '</td>' +
            '<td>' + book.author + '</td>' +
            '<td>' + book.year + '</td>' +
            '<td>' + book.editorial + '</td>';
        table.appendChild(tr);
    });

    document.getElementById('Form').reset();
});
