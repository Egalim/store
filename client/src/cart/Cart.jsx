import React, { useEffect, useState } from 'react'



const Cart = () => {
    const [Items, setItems] = useState([])

    useEffect(() => {

        let number = localStorage.length

        for (let index = 0; index < number; index++) {
            const id = localStorage.key(index);
            fetch(`http://localhost:3000/api/products/${id}`)
                .then(response => response.json())
                .then(data => {
                    setItems(prev => {
                        return [...prev, data]
                    })
                })
        }
    }, [])
    return (
        <div>
            <h2>Корзина</h2>
            {
                Items.map(el => {
                    return <>
                        {el.title}
                        {el.price}
                        <img src={`../src/uploads/` + el.img} alt="" />
                    </>
                })
            }
        </div>
    )
}

export default Cart