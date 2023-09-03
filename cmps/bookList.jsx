import { BookPreview } from "./bookPreview.jsx"

export function BookList({ books }) {
    console.log(books)
    return (
        <ul className="book-list">
            {
                books.map(book =>
                    < li key={book.id} >
                        <BookPreview book={book} />
                    </li>
                )
            }
        </ul >
    )
}