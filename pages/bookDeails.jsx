import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {
    const [book, onGetBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId)
            .then(book => onGetBook(book))
    }, [])

    function bookReadDifficulty() {
        let diffculty = ''
        if (book.pageCount < 100) {
            diffculty = 'Light reading'
        } else if (200 < book.pageCount && book.pageCount < 500) {
            diffculty = 'Descent Reading'
        } else if (book.pageCount > 500) {
            diffculty = 'Serious Reading'
        } else {
            diffculty = 'Slightly decent reading'
        }
        return diffculty
    }

    function priceColor() {
        let priceColor = ''
        if (book.listPrice.amount > 150) {
            priceColor = 'red'
        } else if (book.listPrice.amount < 20) {
            priceColor = 'green'
        } else {
            priceColor = ''
        }
        return priceColor
    }

    console.log(book)
    if (!book) return <h1>Loading...</h1>
    return (
        <section className="book-details">
            <h2>{book.title}</h2>
            <h1>{book.authors}</h1>
            <h4>Price: <span className={priceColor()}>{book.listPrice.amount}</span> {book.listPrice.currencyCode}</h4>
            <p>{book.description}</p>
            <h5>Pages count:{book.pageCount} {bookReadDifficulty()}</h5>
            <button onClick={onBack}>Close</button>
        </section>
    )

}