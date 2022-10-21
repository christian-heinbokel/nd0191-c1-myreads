import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import Loading from "./Loading";
import * as BooksAPI from "../BooksAPI";

const SearchBooks = ({ books, updateBookFn }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [foundBooks, setFoundBooks] = useState([]);

  const handleNewQuery = (e) => {
    const fetchBooks = async () => {
      const queryString = e.target.value.replace(/^ /g, "");
      setQuery(queryString);
      setIsLoading(true);
      if (queryString.replace(/ +/g, "").length) {
        const foundBooks = await BooksAPI.search(queryString);
        if (foundBooks.error || !foundBooks.length) {
          setFoundBooks([]);
          return;
        }
        foundBooks.map((book) => {
          const bookOnShelf = books.find((b) => b.id === book.id);
          if (bookOnShelf) {
            book.shelf = bookOnShelf.shelf;
          }
          return book;
        });
        setFoundBooks(foundBooks.length ? foundBooks : []);
        setIsLoading(false);
      }
    };
    fetchBooks();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              handleNewQuery(e);
            }}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="search-books-results">
          <ol className="books-grid">
            {foundBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} updateBookFn={updateBookFn}></Book>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default SearchBooks;
