import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/bookList.jsx'
import { BookFilter } from '../cmps/bookFilter.jsx'

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultBookFilter())

    useEffect(() => {
        bookService.query(filterBy)
            .then(books => setBooks(books))
    }, [filterBy])

    function onSetFilterBy(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    if (!books) return <h1>Loading...</h1>
    return (
        <section className="book-index">
            <h2>Books:</h2>
            <BookFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy} />
            <Link to="/book/edit">Add Car</Link>
            <BookList books={books} />
        </section>
    )
}