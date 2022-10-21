import { useState } from "react";
import BookCover from "./BookCover";

const Book = ({ book, updateBookFn }) => {
  const [bookshelf, setBookShelf] = useState(book.shelf ?? "none");

  const handleSelect = (e) => {
    const newBookshelf = e.target.value;
    setBookShelf(newBookshelf);
    updateBookFn(book, newBookshelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <BookCover book={book}></BookCover>

        <div className="book-shelf-changer">
          <select value={bookshelf} onChange={(e) => handleSelect(e)}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
