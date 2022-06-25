const Book = ({ image, title, author, desc, price }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target)
      alert("Be water my friend.");
    };

    const clickHandlerTwo = (e) => {
        console.log(e);
        console.log(e.target)
        alert("Knowledge will give you power, but character respect.");
      };
  
    return (
        <article className="book" onMouseOver={() => {
          console.log(title);
        }}>
            <div>
                <img src={image} alt="Bruce Lee Book" />
            </div>
            <div>
                <h1 className="title" onClick={() => console.log(title)}>{title}</h1>
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
            <button type="button" className="btn-one" onClick={clickHandler}><strong>Click Me!</strong></button>&nbsp;&nbsp;
            <button type="button" className="btn-two" onClick={clickHandlerTwo}><strong>Hit Me!</strong></button>
        </article>
    )
  }

  export default Book;