import React from "react";
import styles from "../styles/ItemCard.module.css";
import {itemContext, useContext} from "../ItemConext"

function ItemCard({ name, price }) {
  const value  = useContext (itemContext);
  const {seTotal} =useContext(itemContext)

  const handleAdd = () => {
     setTotal(total+price);
     setitem(item+1);


  };

  const handleRemove = () => {

    setTotal((prevState)=> prevState-price);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
