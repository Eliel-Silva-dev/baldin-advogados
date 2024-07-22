import { FaWhatsapp } from 'react-icons/fa';
import style from './style.min.module.css';
import Link from 'next/link';

const ButtonContact = () => {
  return (
    <button id={style.button_contact} type="button">
      <Link href={`tel:`} target="_blank">
        <FaWhatsapp /> Contato
      </Link>
    </button>
  );
};

export default ButtonContact;
