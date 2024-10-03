import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard/ProductCard';

import { getAllProductsDB } from '@/app/actions';
import style from "./ProductsGrid.modules.css";

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  return (
    <section>
      <Inner>
        <h2>Nuestros Productos</h2>
        <div className='grid grid-cols-12'>
          {response.products && response.products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </Inner>
    </section>
  );
}
