import ListBooksContent from "./ListBooksContent";
import ListBooksTitle from "./ListBooksTitle";
import OpenSearchButton from "./OpenSearchButton";

import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      let books = await BooksAPI.getAll();
      setBooks(books);
    }
    fetchBooks();
  }, []);

  const updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      setBooks((books) => books.filter((b) => b.id !== book.id).concat(book));
    });
  };

  return (
    <div className="list-books">
      <ListBooksTitle />
      <ListBooksContent books={books} updateBook={updateBook} />
      <OpenSearchButton />
    </div>
  );
};

export default ListBooks;
