import { FaWhatsapp } from 'react-icons/fa6';
import style from './style.min.module.css';
import Link from 'next/link';

const ButtonWhatsapp = () => {
  return (
    <div id={style.whats}>
      <Link
        href={
          'https://api.whatsapp.com/send/?phone=5519998565139&text=Ol%C3%A1+Baldin+Advogados%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+seus+servi%C3%A7os.&type=phone_number&app_absent=0'
        }
        target='_blank'
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default ButtonWhatsapp;
