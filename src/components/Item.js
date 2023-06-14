import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("");
  let cartText = inCart ? "Remove From Cart": "Add to Cart";

  function handleItemClick(){
    if (inCart == ""){
      setInCart(() => "in-cart");
      cartText = "Remove From Cart";
    } else {
      setInCart(() => "");
      cartText = "Add to Cart";
    }
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItemClick} className="add">{cartText}</button>
    </li>
  );
}

export default Item;
