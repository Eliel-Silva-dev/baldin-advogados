import { FaArrowDownShortWide } from 'react-icons/fa6';
import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  return (
    <ul id={style.menu_desk}>
      <li>
        <Link href={'/'}>Inicio</Link>
      </li>
      <li>
        <Link href={'/about'}>Sobre</Link>
      </li>
      <li id={style.atuacao}>
        <Link href={'/'}>Areas de Atuação<FaArrowDownShortWide /></Link>
        <div id={style.atuacao_container}>
          <ul>
            <li>
              <Link href={'/compliance'}>Compliance</Link>
            </li>
            <li>

              <Link href={'/business'}>Empresarial</Link>
            </li>
            <li>
              <Link href={'/realstate'}>Imobiliário</Link>
            </li>
            <li>
              <Link href={'/tax'}>Tributário</Link>
            </li>
            <li>
              <Link href={'/labor'}>Trabalhista</Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default MenuDesk;
