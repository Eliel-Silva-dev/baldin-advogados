'use client';

import { useEffect, useState } from 'react';
import Lgpd from '../Lgpd';
import style from './style.min.module.css';
import ButtonWhatsapp from '../buttons/ButtonWhatsapp';

const Footer = () => {
  const [localStorage, setLocalStorage] = useState(true);

  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    const lsContent = window.localStorage.getItem('lgpd');

    if (!lsContent) {
      setLocalStorage(false);
    }
  }, []);

  return (
    <footer className={style.footer}>
      <p>
        <a href="assets/politicas-de-privacidade-baldin.pdf" target="_blank">
          Politica de privacidade
        </a>{' '}
        -{' '}
        <a href="assets/termos-de-servico-baldin.pdf" target="_blank">
          Termos de uso
        </a>
      </p>
      <p>Desenvolvido por Hydrah Tecnologia</p>
      <p>&#9400; Todos os direitos reservados - {year}</p>

      {!localStorage && <Lgpd />}

      <ButtonWhatsapp />
    </footer>
  );
};
export default Footer;
