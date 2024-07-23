import ButtonContact from '../buttons/ButtonContact';
import style from './style.min.module.css';

const ContactSection = () => {
  return (
    <div id={style.contactSection}>
      <h2 className={style.contactTitle}>Entre em contato conosco</h2>
      <div className={style.white}>
        <ButtonContact />
      </div>
    </div>
  );
};

export default ContactSection;
