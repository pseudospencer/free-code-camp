var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
function add(bookList, bookName) {
    // make a shallow copy of booklist. Could also do listCopy = [...bookList];
    let listCopy = bookList.slice();

    // bookname to listCopy
    // return listCopy.push(bookName); // Tricky... arr.push() returns the new length of the array!
    listCopy.push(bookName);

    // return new array
    return listCopy;
}

/* This function should remove a book from the list and return the list */
function remove(bookList, bookName) {
    // make a shallow copy of booklist. Could also do listCopy = [...bookList];
    let listCopy = bookList.slice();

    // if bookName has an index in listCopy
    if (listCopy.indexOf(bookName) >= 0) {
        // pull bookname out of listCopy
        let removed = listCopy.splice(listCopy.indexOf(bookName), 1); // removed == bookName
    }

    // return new array
    return listCopy;
}

let newBookList = add(bookList, 'A Brief History of Time');
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
