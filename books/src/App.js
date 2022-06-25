const books = [
  {
    image: "https://m.media-amazon.com/images/I/61tJBNx1KsL._AC_UY436_FMwebp_QL65_.jpg",
    title: "Bruce Lee's Jeet Kune Do",
    author: "by Sam Fury and Diana Mangoba",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    price: "$14.99"
  },
  {
    image: "https://m.media-amazon.com/images/I/71mkvRbiUPL._AC_UY436_FMwebp_QL65_.jpg",
    title: "Bruce Lee's Fighting Method",
    author: "by Bruce Lee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    price: "$26.99"
  },
  {
    image: "https://m.media-amazon.com/images/I/91e2UzRiM+L._AC_UY436_FMwebp_QL65_.jpg",
    title: "Letters of the Dragon",
    author: "by Bruce Lee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    price: "$11.99"
  }
];

const App = () => {
  return (
    <section className="book-list">
      {books.map((book) => {
        return (
          <Book book={book}></Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const { image, title, author, desc, price } = props.book;

  return (
      <article className="book">
          <div>
              <img src={image} alt="Bruce Lee Book" />
          </div>
          <div>
              <h1 className="title">{title}</h1>
          </div>
          <div>
              <p className="author">{author}</p>
          </div>
          <div>
              <p className="desc">{desc}</p>
          </div>
          <div>
              <h1 className="price">{price}</h1>
          </div>
      </article>
  )
}

export default App;
