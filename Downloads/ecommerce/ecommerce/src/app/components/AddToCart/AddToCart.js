"use client";
import {useAppContext} from "@/app/contexts/AppContext";
import styles from "./AddToCart.modules.css"


const AddToCart = ({name, price, id, description, image}) => {
    const {handleAddToCart} = useAppContext();
  return (
    <>
        <button onClick={()=> handleAddToCart(name, price, image, description, id, 1)} className="btn">Add to cart</button>
    </>
  );
};
 export default AddToCart;