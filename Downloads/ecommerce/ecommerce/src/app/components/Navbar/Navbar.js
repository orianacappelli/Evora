'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingBag } from "react-icons/fi";
import style from "./Navbar.modules.css";

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className="contenedor">
      <Link href={`/`}>
        <Image src={`/images/logo-evora.svg`} width={80} height={80} alt='Logo' />
      </Link>
      <nav>
        <ul className='flex justify-center items-center gap-5'>
          <li><Link href={`/`}>HOME</Link></li>
          <li><Link href={`/cart`}>CART</Link></li>
          <li><Link href={`/shop`}>SHOP</Link></li>
          <li><Link href={`/about`}>ABOUT US</Link></li>
        </ul>
      </nav>

      <Link href={`/cart`}>
        <div className="relative cart-container">
          <FiShoppingBag />
          
          {cartLength > 0 && (
            <span className="cantidad-carrito">
              {' '}
              {cartLength}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
