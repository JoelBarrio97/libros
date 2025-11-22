function printBookInfo(book) {
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Pages: ".concat(book.pages));
    console.log("ISBN: ".concat(book.isbn));
}
// Crea aquí el objeto que cumpla con la interfaz Book
var book = {
    title: "El rey arturo y los caballeros de la tabla redonda",
    author: "Rpger lancelyn green",
    pages: 127,
    isbn: "84-7175-535-1"
};
printBookInfo(book);
