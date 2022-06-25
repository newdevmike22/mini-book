
const firstBook = {
  image: "https://m.media-amazon.com/images/I/61tJBNx1KsL._AC_UY436_FMwebp_QL65_.jpg",
  title: "Bruce Lee's Jeet Kune Do",
  author: "by Sam Fury and Diana Mangoba",
  price: "$14.99"
}

const secondBook = {
  image: "https://m.media-amazon.com/images/I/71mkvRbiUPL._AC_UY436_FMwebp_QL65_.jpg",
  title: "Bruce Lee's Fighting Method",
  author: "by Bruce Lee",
  price: "$26.99"
}

const App = () => {
  return (
    <section className="book-list">
      <Book
        image ={firstBook.image} 
        title ={firstBook.title} 
        author ={firstBook.author} 
        price ={firstBook.price}
      >
        <p>
        <strong>Description:</strong><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </Book>
      <Book image ={secondBook.image} title ={secondBook.title} author ={secondBook.author} price ={secondBook.price} />
    </section>
  )
}

const Book = ({image, title, author, price, children }) => {

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
            <p className="desc">{children}</p>
          </div>
          <div>
              <h1 className="price">{price}</h1>
          </div>
      </article>
  )
}

export default App;
