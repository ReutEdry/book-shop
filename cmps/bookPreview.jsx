
export function BookPreview({ book }) {

    return (
        <article className="book-preview" key={book.id}>
            <h1>{book.title}</h1>
            <h3>{book.listPrice.amount} {book.listPrice.currencyCode}</h3>
            <img src={`${book.thumbnail}`} alt="" />
        </article>
    )
}