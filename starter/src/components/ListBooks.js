import ListBooksContent from "./ListBooksContent";
import ListBooksTitle from "./ListBooksTitle";
import OpenSearchButton from "./OpenSearchButton";

const ListBooks = ({ showSearchPage, setShowSearchpage }) => {
  return (
    <div className="list-books">
      <ListBooksTitle />
      <ListBooksContent />
      <OpenSearchButton
        setShowSearchpage={setShowSearchpage}
        showSearchpage={showSearchPage}
      ></OpenSearchButton>
    </div>
  );
};

export default ListBooks;
