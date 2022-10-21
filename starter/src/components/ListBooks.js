import ListBooksContent from "./ListBooksContent";
import ListBooksTitle from "./ListBooksTitle";
import OpenSearchButton from "./OpenSearchButton";

const ListBooks = ({ books, updateBookFn }) => {
  return (
    <div className="list-books">
      <ListBooksTitle />
      <ListBooksContent books={books} updateBookFn={updateBookFn} />
      <OpenSearchButton />
    </div>
  );
};

export default ListBooks;
