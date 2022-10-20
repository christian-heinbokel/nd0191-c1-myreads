import BookShelf from "./BookShelf";

const ListBooksContent = ({ books, updateBook }) => {
  return (
    <div className="list-books-content">
      <BookShelf
        bookshelfTitle={"Currently Reading"}
        books={books.filter((book) => book.shelf === "currentlyReading")}
        updateBook={updateBook}
      />
      <BookShelf
        bookshelfTitle={"Want to read"}
        books={books.filter((book) => book.shelf === "wantToRead")}
        updateBook={updateBook}
      />
      <BookShelf
        bookshelfTitle={"Read"}
        books={books.filter((book) => book.shelf === "read")}
        updateBook={updateBook}
      />
    </div>
  );
};

export default ListBooksContent;
