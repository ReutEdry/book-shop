import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

export function BookEdit() {
    const [newBook, setNewBook] = useState(bookService.getEmptyBoook())
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (params.bookId) loadBook()
    }, [])


    function loadBook() {
        bookService.get(params.bookId)
            .then(setNewBook)
            .catch(err => console.log('err:', err))
    }

    function onHandleChange({ target }) {
        const filed = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
                value = +value || 0
                break;
        }
        setNewBook(prevNewBook => ({ ...prevNewBook, [filed]: value }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(newBook)
            .then(() => navigate('/book'))
            .catch(err => console.log('err', err))
    }

    const { title, authors, pageCount } = newBook
    return (
        <section className="edit-container">
            <form className="form-section" onSubmit={onSaveBook}>

                <label htmlFor="title">Title:</label>
                <input required onChange={onHandleChange} type="text" name="title" id="title" value={title} placeholder="Book Title" />

                <label htmlFor="authors">Authors:</label>
                <input required onChange={onHandleChange} type="text" name="authors" id="authors" value={authors} placeholder="Book Authors" />

                <label htmlFor="pageCount">PageCount:</label>
                <input required onChange={onHandleChange} type="number" name="pageCount" id="pageCount" value={pageCount} placeholder="Book PageCount" />
                <button>Save</button>
            </form>

        </section>
    )
}