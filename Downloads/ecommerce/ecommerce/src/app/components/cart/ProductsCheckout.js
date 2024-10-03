'use client'

import { useAppContext } from "@/app/contexts/AppContext"
import Image from "next/image"
import { FaRegTrashCan } from "react-icons/fa6";
import style from "./ProductsCheckout.modules.css"

const ProductsCheckout = () => {
    const {cart, cartTotal, handleRemoveProduct} = useAppContext()
    return (
      <div className="carrito-container">
        <table className="productos-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Unidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td className="producto-info">
                  <button onClick={() => handleRemoveProduct(product.id)} className="remove-btn"><FaRegTrashCan /></button>
                  <Image src={`/imgs/${product.image}`} alt={product.name} className="product-img" width={50} height={50}/>
                  <span>{product.name}</span>
                </td>
                <td>{product.quantity}</td>
                <td>${product.price * product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="summary-container">
          <h3>Resumen de Compra</h3>
          <hr />
          <div className="summary-info">
            <p>Total: $ {cartTotal()}</p>
          </div>
        </div>
      </div>
    )
}

export default ProductsCheckout;
