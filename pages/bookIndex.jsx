import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/bookList.jsx'

const { useState, useEffect, Fragment } = React

export function BookIndex() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        bookService.query()
            .then(books => setBooks(books))
    }, [])

    if (!books) return <h1>Loading...</h1>
    return (
        <section>
            <h2>Books:</h2>
            <BookList books={books} />
        </section>

    )
}