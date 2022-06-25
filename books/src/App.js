import books from "./comps/books";
import Book from "./comps/Book";

const App = () => {
  const bruceBooks = "Dragon Books"
 
  return (
    <section>
    <h1 className="bruce">{bruceBooks}</h1>
    <div className="book-list">
      {books.map((book) => {
        return (
          <section>
            <Book key={book.id} {...book}></Book>
          </section>
        )
      })}
    </div>
    </section>
  )
}

export default App;
