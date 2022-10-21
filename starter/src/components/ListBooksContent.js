import BookShelf from "./BookShelf";

const ListBooksContent = ({ books, updateBookFn }) => {
  return (
    <div className="list-books-content">
      <BookShelf
        bookshelfTitle={"Currently Reading"}
        books={books.filter((book) => book.shelf === "currentlyReading")}
        updateBookFn={updateBookFn}
      />
      <BookShelf
        bookshelfTitle={"Want to read"}
        books={books.filter((book) => book.shelf === "wantToRead")}
        updateBookFn={updateBookFn}
      />
      <BookShelf
        bookshelfTitle={"Read"}
        books={books.filter((book) => book.shelf === "read")}
        updateBookFn={updateBookFn}
      />
    </div>
  );
};

export default ListBooksContent;
