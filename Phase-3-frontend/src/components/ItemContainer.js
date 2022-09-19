import React from "react";
import ItemCard from "./ItemCard";

function ItemContainer({ items, setItems }) {
    return (
        <ul className="cards">{items.map(item => <ItemCard setItems= {setItems} items={items} item={item} key={item.id} />)}</ul>
    );
}

export default ItemContainer;