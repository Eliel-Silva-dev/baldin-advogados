import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  return (
    <ul className={style.menu_desk}>
      <li>
        <Link href={'/'}>Inicio</Link>
      </li>
      <li>
        <Link href={'/about'}>Sobre</Link>
      </li>
      <li id={style.atuacao}>
        <Link href={'/'}>Areas de Atuação</Link>
        <div id={style.atuacao_container}>
          <ul>
            <li>
              <Link href={'/compliance'}>Compliance</Link>
            </li>
            <li>
              <Link href={'/empresarial'}>Empresarial</Link>
            </li>
            <li>
              <Link href={'/imobiliario'}>Imobiliário</Link>
            </li>
            <li>
              <Link href={'/tributario'}>Tributário</Link>
            </li>
            <li>
              <Link href={'/trabalhista'}>Trabalhista</Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default MenuDesk;
