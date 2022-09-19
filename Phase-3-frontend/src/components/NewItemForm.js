import React, {useState} from "react";

function NewItemForm({createItem}) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  
  function submitHandler(event) {
      event.preventDefault()

      let newItem = {
        image: image,
        name: name,
        price: price,
        category: category
      }
      fetch("http://localhost:9292/products", {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newItem)
    })
      .then(resp => resp.json())
      .then(createItem(newItem))

  
    
    createItem(newItem);
    setName("")
    setPrice("")
    setCategory("")
    setImage("")

  }

  return (
    <div className="new-item-form">
      <h2>New Item</h2>
      <form onSubmit={submitHandler}>
        <div className="inline fields" >
          <input onChange={(e)=>setName(e.target.value)} value={name} type="name" name="name" placeholder="Name"/>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} type="number" name="amount" placeholder="price" />
          <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" name="category" placeholder="Category" />
          <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button className="ui button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default NewItemForm;


