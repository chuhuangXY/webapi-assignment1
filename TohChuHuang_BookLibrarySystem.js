// Data of books are store in a Array list
const books = [
    {
        bookTitle: 'The Only One',
        bookAuthor: 'Sally King',
        bookISBN: '978-3-16-148410-0',
        bookGenre: 'Fiction',
        bookQuantity: 0
    },
    {
        bookTitle: 'I am sorry',
        bookAuthor: 'Queen Jokes',
        bookISBN: '978-3-16-148410-2',
        bookGenre: 'Fiction',
        bookQuantity: 2
    },
    {
        bookTitle: 'Nice to meet you',
        bookAuthor: 'Queen Jokes',
        bookISBN: '338-1-22-115310-4',
        bookGenre: 'Fiction',
        bookQuantity: 2
    }
]

//Function to search the book by Title
function searchBookByTitle(searchBookTitle) {
    console.log('1) SearchBookByTitle Function');

    // Here where we use filter create another set of arrays and compare it with the Book array list
    let searchBookByTitle = books.filter((book) => book.bookTitle === searchBookTitle);

    // check if no books match the search title
    if (searchBookByTitle.length === 0) {
        return 'There are no books named ' + searchBookTitle;
    }

    else {
        // return an array of matching books
        return searchBookByTitle;
    }
}

//Function to search the book by Author
function searchBookByAuthor(searchBookAuthor) {
    console.log('2) SearchBookByAuthor Function');

    // Create another set of arrays and compare it with the Book array list
    let searchBookByAuthor = books.filter((book) => book.bookAuthor === searchBookAuthor);

    // check if no books match the search Author
    if (searchBookByAuthor.length === 0) {
        return 'There are no books named ' + searchBookAuthor;
    }

    else {
        // return an array of matching books
        return searchBookByAuthor;
    }
}

//Function to borrow Book using BookISBN and check its book quantity 
function borrowBook(bookISBN) {
    console.log('3) Borrow Book Function');

    //find inputed bookISBN and compared it the Book array list 
    let bookToBorrow = books.find((book) => book.bookISBN === bookISBN);

    // Check if the book exists
    if (!bookToBorrow) {
        return 'Book not found.';
    }

    // Check if there are available copies to borrow
    if (bookToBorrow.bookQuantity > 0) {
        // Decrement the quantity of available copies
        bookToBorrow.bookQuantity--;

        // return book has been borrowed message
        return {
            message: `Book Title: "${bookToBorrow.bookTitle}", ISBN: "${bookToBorrow.bookISBN}" has been borrowed.`,
            bookDetails: bookToBorrow
        };
    }

    else {
        return `No available copies of "${bookToBorrow.bookISBN}" to borrow.`;
    }
}

//Function to change the book quantity using BookISBN
function changeBookQuantity(bookISBN, quantityToChange) {
    console.log('4) Change Book Quantity Function');

    //find inputed bookISBN and compared it the Book array list
    let bookToUpdate = books.find((book) => book.bookISBN === bookISBN);

    // Check if the book exists
    if (!bookToUpdate) {
        return 'Book not found.';
    }

    // Check if the change in quantity is valid
    if (quantityToChange === 0) {
        return 'Quantity unchanged. Please provide a non-zero quantity.';
    }

    // Check if there are enough copies to perform the change
    if (bookToUpdate.bookQuantity + quantityToChange >= 0) {
        // Change the quantity of available copies
        bookToUpdate.bookQuantity += quantityToChange;

        // use optional operator
        return {
            message: `${quantityToChange > 0 ? 'Increased' : 'Decreased'} ${Math.abs(quantityToChange)} copies of "${bookToUpdate.bookTitle}" quantity.`,
            bookDetails: bookToUpdate
        };
    }

    else {
        return `Not enough copies of "${bookToUpdate.bookTitle}" to perform the operation.`;
    }
}

//Function too add new book into the book array list
function addBook(newBook) {
    console.log('5 Add Book Function');
    const existingBook = books.find((book) => book.bookTitle === newBook.bookTitle);

    // Check if the book exists
    if (existingBook) {
        return 'A book with the same title already exists.';
    }
    // if not book exists
    else {
        books.push(newBook);

        return {
            message: `Book "${newBook.bookTitle}" has been added.`,
            bookDetails: newBook
        };
    }
}

function removeBook(bookISBN) {
    console.log('6) Remove Book Function');
    // Find the index of the book with the specified ISBN
    const bookIndex = books.findIndex((book) => book.bookISBN === bookISBN);

    // Check if the book is found
    if (bookIndex === -1) {
        return 'Book not found.';
    }

    // Remove the book from the array
    const removedBook = books.splice(bookIndex, 1)[0];

    return {
        message: `Book "${removedBook.bookTitle}" has been removed.`,
        bookDetails: removedBook
    };
}


module.exports = {
    searchBookByTitle,
    searchBookByAuthor,
    borrowBook,
    changeBookQuantity,
    addBook,
    removeBook
};