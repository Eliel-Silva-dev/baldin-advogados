import style from './style.min.module.css';

type Theader = {
  title: string;
};

const HeaderDiv = ({ title }: Theader) => {
  return (
    <header id={style.HeaderDiv}>
      <h2 className={style.headerContent}>{title}</h2>
    </header>
  );
};

export default HeaderDiv;
