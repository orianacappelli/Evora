import Image from 'next/image';
import Link from 'next/link';
import style from "./ProductCard.modules.css";

const ProductCard = ({ item }) => {
  return (
    <div className="card card-container">
      <Image
        src={`/imgs/${item.image}`}
        alt={item.name}
        width={900}
        height={900}
        
      />
      <hr/>
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <Link className="boton" href={`/product/${item._id}`}>View More</Link>
    </div>
    
  );
};

export default ProductCard;
