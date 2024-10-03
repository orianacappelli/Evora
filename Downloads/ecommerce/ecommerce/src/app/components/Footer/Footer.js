"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Link from "next/link";
import Image from 'next/image';
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import styles from "./Footer.modules.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-section">
      <Link href={`/`}>
        <Image
          src={`/images/logo-evora.svg`}
          width={180}
          height={180}
          alt='Logo'
        />
        </Link>
      </div>

      <div className="footer-section"></div>

      <div className="footer-section">
        <ul className="redes-sociales">
            <li><span className="icono"><CiInstagram /></span><a href="https://www.instagram.com/">EvoraJoyas</a></li>
            <li><span className="icono"><FaTiktok /></span><a href="https://www.tiktok.com/@aletaricajoyas">EvoraJoyas</a></li>
            <li><span className="icono"><CgMail /></span><a href="https://mail.google.com/">evora.joyas@gmail.com</a></li>
        </ul>
      </div>
      
    </footer>
  );
}
