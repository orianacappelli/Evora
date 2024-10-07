
import ProductCard from '@/app/components/ProductCard/ProductCard';
import style from "./Shop.modules.css";
import { getAllProductsDB } from '@/app/actions';

export default async function page() {
  const response = await getAllProductsDB()
  return (
    <section>
        
        <div className='container-sp'>
          <div className='articulos'>
            <h2>Anillos</h2>
            <h2>Pulseras</h2>
            <h2>Collares</h2>
          </div>
          <div className='productos-td'>
            {response.products && response.products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      
    </section>
  )
}

