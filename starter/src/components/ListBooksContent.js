import BookShelf from "./BookShelf";

const ListBooksContent = ({ books }) => {
  return (
    <div className="list-books-content">
      <BookShelf
        bookshelfTitle={"Currently Reading"}
        books={books.filter((book) => book.shelf === "currentlyReading")}
      />
      <BookShelf
        bookshelfTitle={"Want to read"}
        books={books.filter((book) => book.shelf === "wantToRead")}
      />
      <BookShelf
        bookshelfTitle={"Read"}
        books={books.filter((book) => book.shelf === "read")}
      />
    </div>
  );
};

export default ListBooksContent;
