import { useState, useMemo, useRef } from "react";

function UseMemoExample() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const focusRef = useRef()

    const handelAdd = () => {
        setProducts(prev => [
            ...prev,
            {
                name,
                price: +price
            }
        ])
        setName('')
        setPrice('')

        focusRef.current.focus()
    }

    const handelDelete = (product) => {
        setProducts(prev => {
            return products.filter(item => item !== product)
        })
    }

    const total = useMemo(() => {
        const result = products.reduce((result, curr) => result + curr.price, 0)
        return result
    }, [products])

    return (
        <div>
            <input
                ref={focusRef}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handelAdd}>Add</button>
            <br />
            Total: {total}
            <br />
            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.price}
                            <button onClick={() => handelDelete(product)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseMemoExample