import Book from "./Book";

const BookShelf = ({ bookshelfTitle, books, updateBookFn }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} updateBookFn={updateBookFn} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
