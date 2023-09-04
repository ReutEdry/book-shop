import { bookService } from "../services/book.service.js"

const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        bookService.get(params.bookId)
            .then(book => setBook(book))
            .catch(err => {
                console.log('err', err)
                navigate('/book')
            })
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

    function onBack() {
        navigate('/book')
    }

    if (!book) return <h1>Loading...</h1>

    return (
        <section className="book-details">
            <h2>{book.title}</h2>
            <h1>{book.authors}</h1>
            <h4>Price: <span className={priceColor()}>{book.listPrice.amount}</span> {book.listPrice.currencyCode}</h4>
            <p>{book.description}</p>
            <img src={book.thumbnail} />
            <h5>Pages count:{book.pageCount} {bookReadDifficulty()}</h5>
            <button onClick={onBack}>Close</button>
        </section>
    )

}