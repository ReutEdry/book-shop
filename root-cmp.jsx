// import { Home } from './cmps/home.jsx'
import { BookIndex } from './pages/bookIndex.jsx'

export function App() {




    return <section className="app">
        <header className="app-header">
            <h1>Welcom to my Book store</h1>
        </header>
        <main className="container">
            {/* <Home /> */}
            <BookIndex />
        </main>
    </section>
}