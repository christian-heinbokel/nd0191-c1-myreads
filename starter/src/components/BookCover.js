const BookCover = ({ book }) => {
  return (
    book.imageLinks && (
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 192,
          backgroundImage: `url("${book.imageLinks.thumbnail}")`,
        }}
      ></div>
    )
  );
};

export default BookCover;
