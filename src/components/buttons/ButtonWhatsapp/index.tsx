import { FaWhatsapp } from 'react-icons/fa6';
import style from './style.min.module.css';
import Link from 'next/link';

const ButtonWhatsapp = () => {
  return (
    <div id={style.whats}>
      <Link href={'tel:+55199'}>
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default ButtonWhatsapp;
