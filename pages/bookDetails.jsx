import { BookReview } from "../cmps/bookReview.jsx"
import { bookService } from "../services/book.service.js"

const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

export function BookDetails() {
    const [book, setBook] = useState(null)
    // const [bookReviewBy, setBookReview] = useState(bookService.getEmptyReview())
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        bookService.get(params.bookId)
            .then(book => {
                setBook(book)
            })
            .catch(err => {
                console.log('err', err)
                navigate('/book')
            })
    }, [])

    // useEffect(() => {
    //     // setBookReview(bookReviewBy)
    //     bookService.get(params.bookId).then(res => {
    //         console.log(book)
    //         // setBook
    //     })
    //     console.log('vjnfev', book)
    //     // console.log(bookReviewBy)
    // }, [book.reviews])

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

    function handleReviewAdded(newReview) {
        setBook(prevBook => ({ ...prevBook, reviews: [...prevBook.reviews, newReview] }))
    }

    function onDeleteReview(reviewId, bookId) {
        bookService.deleteReview(reviewId, bookId)
            .then(setBook)
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
            {book.reviews && book.reviews.length > 0 && (

                <section className="review">
                    {
                        book.reviews.map(bookReview => <div key={bookReview.id}>
                            <h2>{bookReview.fullName}</h2>
                            <p>{bookReview.review}, {bookReview.rating}-stars</p>
                            <h3>{bookReview.date}</h3>
                            <button onClick={() => onDeleteReview(bookReview.id, book.id)}>Delete Review</button>
                        </div>
                        )
                    }
                </section>
            )}
            {/* <BookReview setBookReview={setBookReview} setBook={setBook} book={book} bookReviewBy={bookReviewBy} /> */}
            <BookReview book={book} onHandleReviewAdded={handleReviewAdded} />
            <button onClick={onBack}>Close</button>
        </section >
    )

}