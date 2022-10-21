import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
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
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<ListBooks books={books} updateBookFn={updateBook} />}
        />
        <Route
          exact
          path="/search"
          element={<SearchBooks books={books} updateBookFn={updateBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
