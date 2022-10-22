const BookCover = ({ book }) => {
  const noCoverAvailable = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <p style={{ fontWeight: 400, fontSize: 12 }}>No image available</p>
    </div>
  );
  if (book.imageLinks) {
    return (
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 192,
          backgroundImage: `url("${book.imageLinks.thumbnail ?? ""}")`,
        }}
      />
    );
  } else {
    return noCoverAvailable;
  }
};

export default BookCover;
