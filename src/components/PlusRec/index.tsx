import Link from 'next/link';
import style from './style.min.module.css';
import Button from '../buttons/Button';
import { FaWhatsapp } from 'react-icons/fa';

const PlusRec = () => {
  return (
    <div className={style.plus_rec}>
      <Button>
        <Link href={`tel:`} target="_blank">
          <FaWhatsapp /> Contato
        </Link>
      </Button>
    </div>
  );
};
export default PlusRec;
