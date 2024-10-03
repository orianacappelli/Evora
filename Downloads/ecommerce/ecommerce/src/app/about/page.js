import  { getAllProductsDB }from "@/app/actions";
import Image from 'next/image';
import style from "./About.modules.css"

const About = async () => {
  const products = await getAllProductsDB()

  return (
    <div>
      <div>
      <Image
        src={`/images/hero2.svg`}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }} // optional
        alt='hero2'
      />
      </div>
      <div className="container-about h-screen">
        <h1 className="titulo">Bienvenidos a Evora!!</h1>
        <p className="texto">En Evora, creemos que el lujo no es solo llevar joyas hermosas, sino abrazar una elegancia atemporal que trasciende las tendencias. Fundada con la visión de ofrecer piezas exclusivas y de alta gama, estamos dedicados a crear joyas exquisitas que capturen la esencia de la sofisticación y el refinamiento.</p>
        <h2 className="seg-titulo">Nuestro Compromiso</h2>
        <p className="texto">Estamos comprometidos con la sostenibilidad y las prácticas éticas. Desde los materiales que seleccionamos hasta la forma en que creamos nuestras joyas, buscamos tener un impacto positivo tanto en el medio ambiente como en las comunidades con las que trabajamos. Cada pieza de Evora refleja nuestra dedicación al lujo responsable.</p>
      </div>
    </div>
  )
}

export default About