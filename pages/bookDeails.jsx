import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {
    const [book, onGetBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId)
            .then(book => onGetBook(book))
    }, [])

    if (!book) return <h1>Loading...</h1>
    return (
        <section className="book-details">
            <h1>{book.title}</h1>
            <h2>{book.authors}</h2>
            <h4>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <p>{book.description}</p>
            <h5>Pages count:{book.pageCount}</h5>
            <button onClick={onBack}>Close</button>
        </section>
    )

}