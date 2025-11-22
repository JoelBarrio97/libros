interface Book {
  title: string;
  author: string;
  pages: number;
  isbn: string
}

function printBookInfo(book: Book) {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
  console.log(`ISBN: ${book.isbn}`);
}

// Crea aquí el objeto que cumpla con la interfaz Book
const book: Book = {
  title: `El rey arturo y los caballeros de la tabla redonda`,
  author: `Rpger lancelyn green`,
  pages: 127,
  isbn: `84-7175-535-1`
};

printBookInfo(book);