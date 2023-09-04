import { BookPreview } from "./bookPreview.jsx"

const { Link } = ReactRouterDOM

export function BookList({ books }) {

    return (
        <ul className="book-list">
            {
                books.map(book =>
                    < li key={book.id} >
                        <BookPreview book={book} />
                        <section>
                            <button><Link to={`/book/${book.id}`}>Details</Link></button>
                            <button><Link to={`/book/edit/${book.id}`}>Edit</Link></button>
                        </section>
                    </li>
                )
            }
        </ul >
    )
}
