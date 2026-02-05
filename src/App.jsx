import "./App.css";
import data from "./data.json";
import Book from "./Book";

function App() {
  const { books } = data;

  return (
    <>
      <div className="grid">
        {books.map((book) => (
          <Book key={book.title} book={book} />
        ))}
      </div>
    </>
  );
}

export default App;
