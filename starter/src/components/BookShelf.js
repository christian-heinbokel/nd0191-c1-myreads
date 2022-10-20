import Book from "./Book";

const BookShelf = ({ bookshelfTitle, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li>
                <Book
                  key={book.title}
                  title={book.title}
                  authors={book.authors}
                  backgroundImageUrl={book.backgroundImageUrl}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
