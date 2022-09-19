import React, {useState, useEffect} from "react";
import ItemContainer from "./ItemContainer";
import NewItemForm from "./NewItemForm"
import Search from "./Search";
import Header from "./Header";

function App() {

  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const createItem = (newItem) => {
    setItems([...items, newItem])
  }

  
  useEffect(()=>{
    fetch("http://localhost:9292/products")
    .then(response=>response.json())
    .then(data=>setItems(data))
  },[])

  let filteredItems = items.filter(item => {
    return item.name?.toLowerCase().includes(searchTerm)
  })

  return (
    <main>
      <Header />
      <NewItemForm createItem={createItem}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ItemContainer items={filteredItems} setItems={setItems}/>
    </main>
  );
}
export default App;