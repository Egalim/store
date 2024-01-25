import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Card() {
    let { id } = useParams()
    const [Product, setProduct] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
            .then(response => response.json())
            .then(json => setProduct(json))
    }, [])
    return (
        <div className='container'>
            <Link to={`..`}><h3>Назад</h3></Link>
            <div className="content column">
                <img src={`../src/uploads/` + Product.img} alt="" />
                <div>
                    <h1>{Product.title}</h1>
                    <h2>{Product.price} ₽</h2>
                </div>
                <button>Добавить в корзину</button>
            </div>

        </div>
    )
}

