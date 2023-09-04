const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from './cmps/appHeader.jsx'
import { About } from './pages/about.jsx'
import { Home } from './pages/home.jsx'
import { BookIndex } from './pages/bookIndex.jsx'
import { BookDetails } from './pages/bookDetails.jsx'
import { BookEdit } from './pages/bookEdit.jsx'


export function App() {

    return (
        <Router>
            <section className="app">
                <AppHeader />

                <main className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/book" element={<BookIndex />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}