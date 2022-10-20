import ListBooksContent from "./ListBooksContent";
import ListBooksTitle from "./ListBooksTitle";
import OpenSearchButton from "./OpenSearchButton";

import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";

const ListBooks = ({ showSearchPage, setShowSearchpage }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      let books = await BooksAPI.getAll();
      setBooks(books);
      console.log("received books: ", books);
    }
    fetchBooks();
  }, []);
  return (
    <div className="list-books">
      <ListBooksTitle />
      <ListBooksContent books={books} />
      <OpenSearchButton
        setShowSearchpage={setShowSearchpage}
        showSearchpage={showSearchPage}
      ></OpenSearchButton>
    </div>
  );
};

export default ListBooks;
