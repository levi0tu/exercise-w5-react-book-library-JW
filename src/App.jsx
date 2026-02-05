import "./App.css";
import data from "./data.json";
import Book from "./Book";
import Header from "./Header";

function App() {
  const { books } = data;

  return (
    <div className="page">
      <Header />
      <div className="grid">
        {books.map((book) => (
          <Book key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
