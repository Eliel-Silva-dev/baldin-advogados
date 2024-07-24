'use client';

import { useEffect } from 'react';
import style from './style.min.module.css';

import Link from 'next/link';
import ButtonContact from '@/components/buttons/ButtonContact';
import { FaArrowDownShortWide } from 'react-icons/fa6';

const MenuDesk = () => {
  const hamburguerActive = () => {
    const contHamb = document.getElementById(
      'container_hamburguer'
    ) as HTMLElement;
    contHamb.classList.toggle('style_min_active__D38du');
  };

  const atuacao = () => {
    const pActiveOn = document.getElementById('areasAtuacao') as HTMLElement;
    console.log(pActiveOn);
    pActiveOn.classList.toggle('style_min_pActive__EvbK3');
    //style_min_pActive__EvbK3
  };
  useEffect(() => {
    const menuMobile = document.getElementById(
      'container_hamburguer'
    ) as HTMLElement;
    const masc = document.getElementById('masc') as HTMLElement;
    const liList = document.querySelectorAll(
      '#links li a'
    ) as NodeListOf<Element>;

    menuMobile.addEventListener('click', hamburguerActive);
    masc.addEventListener('click', hamburguerActive);
    masc.addEventListener('click', atuacao);
    liList.forEach((li) => {
      li.addEventListener('click', hamburguerActive);
      li.addEventListener('click', atuacao);
    });
  }, []);

  return (
    <div id={style.menu_mob}>
      <div id="container_hamburguer" className={style.container_hamburguer}>
        <div className={style.hamburguer}></div>
      </div>
      <div id="masc" className={style.masc}></div>
      <ul id="links" className={style.link_container}>
        <li>
          <Link href={'/'}>Inicio</Link>
        </li>
        <li>
          <Link href={'/about'}>Sobre</Link>
        </li>
        <li id={style.atuacao}>
          <p onClick={atuacao} id="areasAtuacao">
            Areas de Atuação <FaArrowDownShortWide />
          </p>
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
              <li>
              <Link href={'/civillitigation'}>Litigancia</Link>
            </li>
            </ul>
          </div>
        </li>
        <li id={style.plus}>
          <ButtonContact />
        </li>
      </ul>
    </div>
  );
};

export default MenuDesk;
