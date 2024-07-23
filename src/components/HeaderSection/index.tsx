import style from './style.min.module.css';

type Theader = {
  title: string;
  message: string;
};

const HeaderSection = ({ title, message }: Theader) => {
  return (
    <header id={style.headerSection}>
      <div>
        <h2 className={style.headerContent}>{title}</h2>
        <p className={style.headerContent}>{message}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
