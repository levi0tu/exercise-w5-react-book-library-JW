import "./App.css";
import data from "./data.json";
import Book from "./Book";

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
      {books.map((book) => (
        <Book key={book.title} book={book} />))}
    </>
  );
}

export default App;
