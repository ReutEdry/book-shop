import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/bookList.jsx'
import { BookDetails } from './bookDeails.jsx'
import { BookFilter } from '../cmps/bookFilter.jsx'

const { useState, useEffect, Fragment } = React

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultBookFilter())

    useEffect(() => {
        bookService.query(filterBy)
            .then(books => setBooks(books))
    }, [filterBy])

    function onSetFilterBy(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    if (!books) return <h1>Loading...</h1>
    return (
        <section className="book-index">
            {!selectedBookId &&
                <Fragment>
                    <h2>Books:</h2>
                    <BookFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy} />
                    <BookList books={books} onSelectBookId={onSelectBookId} />
                </Fragment>
            }
            {selectedBookId && <BookDetails bookId={selectedBookId} onBack={() => setSelectedBookId(null)} />}
        </section>

    )
}