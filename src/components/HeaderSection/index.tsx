import style from './style.min.module.css';

type Theader = {
  children: React.ReactNode;
};

const HeaderSection = ({ children }: Theader) => {
  return (
    <div id={style.headerSection}>
      <h2 className={style.contactTitle}>{children}</h2>
    </div>
  );
};

export default HeaderSection;
