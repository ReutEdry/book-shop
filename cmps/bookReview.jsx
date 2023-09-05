import { bookService } from "../services/book.service.js"
const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

export function BookReview({ book, onHandleReviewAdded }) {
    const [reviewBy, setReview] = useState(bookService.getEmptyReview())
    const params = useParams()



    function onHandleChange({ target }) {
        const filed = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
                value = +value || 0
                break;
        }
        setReview(prevReview => ({ ...prevReview, [filed]: value }))
    }

    function onSendReview(ev) {
        console.log(book)
        ev.preventDefault()
        bookService.addReview(params.bookId, reviewBy)
        onHandleReviewAdded(reviewBy)
    }

    const { fullName, rating, review, date } = reviewBy
    return (
        <section className="review-container">
            <form className="review-form" onSubmit={onSendReview}>
                <label htmlFor="fullName">Full Name:</label>
                <input value={fullName} onChange={onHandleChange} type="text" name="fullName" id="fullName" placeholder="Enter Your Full Name:" />

                <label htmlFor="rating">Rating:</label>
                <select value={rating} name="rating" onChange={onHandleChange} id="rating">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>

                <label htmlFor="review">Review:</label>
                <textarea value={review} name="review" onChange={onHandleChange} id="review" rows="3"></textarea>

                <label htmlFor="date">Date Of Reading:</label>
                <input value={date} onChange={onHandleChange} type="date" name="date" id="date" />

                <button>Send</button>
            </form>
        </section>
    )
}