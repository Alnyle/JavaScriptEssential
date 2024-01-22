const addBtn = document.getElementById('addBtn');
const booksDiv = document.getElementById('books');
let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber,
        };
    
        books.push(book);
        
        showBooks();
        clearInput();    
    } else {
        alert('please fill in all fields correctly');
    }

}


function showBooks() {
    booksDiv.innerHTML = ''

    books.forEach((book, index) => {
        
        // create book div
        const div = document.createElement('div');
        div.classList.add('book');

        // create Book number header
        const bookNumber = document.createElement('h3');
        bookNumber.textContent = `book Number ${index + 1}`;
        div.appendChild(bookNumber);

        const bookName = document.createElement('p');
        bookName.innerHTML = `<strong>Book Name:</strong> ${book.name}`;
        div.appendChild(bookName);

        const bookDescription = document.createElement('p');
        bookDescription.innerHTML = `<strong>Book Name:</strong> ${book.bookDescription}`;
        div.appendChild(bookDescription);

        const PagesNumber = document.createElement('p');
        PagesNumber.innerHTML = `<strong>no. of pages:</strong> ${book.pagesNumber}`;
        div.appendChild(PagesNumber);

        booksDiv.appendChild(div)

    })


}


function clearInput() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}


addBtn.addEventListener('click', addBook)