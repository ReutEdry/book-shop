const { NavLink } = ReactRouterDOM

export function AppHeader() {

    return (
        <header>
            <section className="app-header">
                <h1>React Books App</h1>
                <nav className="navLinks">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/book">Our Books</NavLink>
                </nav>
            </section>
        </header>
    )
}