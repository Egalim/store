import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Catalog() {
  const [List, setList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((json) => setList(json))
  }, [])

  const addCart = (name, value) => {
    let number = localStorage.getItem(name)
    if(number) {
      let num = Number(number)
      num++
      localStorage.setItem(name, num)
    } else {
      localStorage.setItem(name, value)
    }
  }

  return (
    <div>
      <div className="container">
        <Link to={'/new'}>Добавить новый товар</Link>
        <Link to={'/cart'} style={{margin: "0px 10px"}}>Корзина</Link>
        <div className="catalog txt_white">
          {
            List.map(el => (
              <div
                className="catCard"
                key={el.id}
                onClick={() => {
                  navigate(`/${el.id}`)
                }}>
                <div className="catImg" >
                  <img
                    src={`src/uploads/` + el.img}
                    alt="product's image" />
                </div>
                <div className="desc">
                <h1>{el.price} ₽</h1>
                <h2>{el.title}</h2>
                <button onClick={() => {
                  addCart(el.id, 1)
                }}>Добавить в корзину</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

