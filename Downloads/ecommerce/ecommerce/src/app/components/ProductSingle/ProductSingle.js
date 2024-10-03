import Image from "next/image";
import AddToCart from "@/app/components/AddToCart/AddToCart";
import style from "./ProductSingle.modules.css";

const ProductSingle = ({product}) => {
    const {image, name, price, description, _id} = product;
  return (
    <section>
        <div className="contenedorps">
            <div className="contimg">
                <Image
                    src={`/imgs/${image}`}
                    alt={name}
                    width={500}
                    height={500}
                />
            </div>
            <div className="continfo">
                <h1>{name}</h1>
                <h3>${price}</h3>
                <p>{description}</p>
                <AddToCart className="botoncompra" price={price} name={name} image={image} description={description} id={_id}/>
            </div>
        </div>
    </section>
  )
}

export default ProductSingle