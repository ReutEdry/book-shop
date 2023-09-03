const { useState, useEffect } = React


export function BookFilter({ filterBy, onSetFilterBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
    }

    const { price, name } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>filter your Book</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="name">Book Name:</label>
                <input onChange={handleChange} type="text" id="name" name="name" value={name} placeholder="By Book Name" />

                <label htmlFor="price">Book Price</label>
                <input onChange={handleChange} type="number" id="price" name="price" value={price} placeholder="By Book price" />
                <button>SetFilter</button>
            </form>
        </section>
    )
}