const BookSystem = require("./TohChuHuang_BookLibrarySystem.js");

//function 1 searchBookByTitle
const searchBookByTitle = 'The Only One';
console.log(BookSystem.searchBookByTitle(searchBookByTitle));

//function 2 searchBookByAuthor
const searchBookByAuthor = 'Queen Jokes';
console.log(BookSystem.searchBookByAuthor(searchBookByAuthor));

//function 3 borrowBookISBN
const borrowBookISBN = '978-3-16-148410-2';
console.log(BookSystem.borrowBook(borrowBookISBN))

//function 4 changeBookQuantity
const changeBookISBN = '978-3-16-148410-2';
const changeBoonQuantity = 2;
console.log(BookSystem.changeBookQuantity(changeBookISBN, changeBoonQuantity));

//function 5 newBookToAdd
const newBookToAdd = {
    bookTitle: 'The Coding Journey',
    bookAuthor: 'Code Master',
    bookISBN: '978-3-16-148410-5',
    bookGenre: 'Programming',
    bookQuantity: 10
};
console.log(BookSystem.addBook(newBookToAdd));

//function 6 bookToRemove
const bookToRemove = '978-3-16-148410-2';
console.log(BookSystem.removeBook(bookToRemove));