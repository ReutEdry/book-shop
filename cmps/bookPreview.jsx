
export function BookPreview({ book }) {
    console.log(book)
    return (
        <article className="book-preview" key={book.id}>
            <h1>{book.title}</h1>
            <h3>{book.listPrice.amount}</h3>
            <img src={`${book.thumbnail}`} alt="" />
        </article>
    )
}