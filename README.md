# Chuhuang_BookLibrarySystem
This node module represents the function of mangement of books in the Book Library system. It provides search functionality and adjust the books details. 


## Set Up
1. Create a new file name 'app.js'
2. import the module with the correct file path 
    ```
    const BookSystem = require("./TohChuHuang_BookLibrarySystem.js");
    ```
3. Install dependencies:
    ```
    npm install init
    npm install nodemon
    npm install 
    ```
4. nodemon app.js


## Features

- Search Book By Title
- Search Book By Author
- Borrow Book by ISBN
- Change Book Quantity
- Add new book and details
- Remove book

## The Arrays Used
- `books` array is to store books details as shown below:
    ```
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
    ```

## Function 1 - Search Book By Title
Add this code to the app.js to call the function 1
```
const searchBookByTitle = 'The Only One';
console.log(BookSystem.searchBookByTitle(searchBookByTitle));
```

## Function 2 - Search Book By Author
Add this code to the app.js to call the function 2
```
const searchBookByAuthor = 'Queen Jokes';
console.log(BookSystem.searchBookByAuthor(searchBookByAuthor));
```

## Function 3 - Borrow Book by ISBN
Add this code to the app.js to call the function 3
```
const borrowBookISBN = '978-3-16-148410-2';
console.log(BookSystem.borrowBook(borrowBookISBN))
```

## Function 4 - Change Book Quantity
Add this code to the app.js to call the function 4
```
const changeBookISBN = '978-3-16-148410-2';
const changeBoonQuantity = 2;
console.log(BookSystem.changeBookQuantity(changeBookISBN, changeBoonQuantity));
```

## Function 5 - Add new book and details
Add this code to the app.js to call the function 5
```
const newBookToAdd = {
    bookTitle: 'The Coding Journey',
    bookAuthor: 'Code Master',
    bookISBN: '978-3-16-148410-5',
    bookGenre: 'Programming',
    bookQuantity: 10
};
console.log(BookSystem.addBook(newBookToAdd));
```

## Function 6 - Remove book
Add this code to the app.js to call the function 6
```
const bookToRemove = '978-3-16-148410-2';
console.log(BookSystem.removeBook(bookToRemove));
```

