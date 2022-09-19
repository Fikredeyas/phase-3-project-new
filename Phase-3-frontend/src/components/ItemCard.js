import React, { useState } from "react";

function ItemCard({ item, setItems, items }) {

    const [addToCart, setAddToCart] = useState(!item.is_cart)

  const handleAddToCart = () => {
    console.log(item)
    fetch(`http://localhost:9292/products/${item.id}`, {
      method: 'PATCH',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({is_cart: !addToCart})
    }).then(response=>{
      setAddToCart(!addToCart)
    })
    
  }

  const handleDelete = () => {
    fetch(`http://localhost:9292/products/${item.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json',
      }
    }).then(response => {
      const newItems=items.filter(i=>i.id !== item.id)
    setItems(newItems)
  })
  }

    return (
        <li className="card">
            <img src={item.image} alt={"item name"} />
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>{item.category}</p>
            <p>* {item?.description} *</p>
            {/* <p>{item.inCart}</p> */}
            {addToCart ? (
        <button className="primary" onClick={handleAddToCart}>Add To Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Remove From Cart</button>
      )}
      <button className="primary" onClick={handleDelete}>Delete item</button>
        </li>
    );
}

export default ItemCard;