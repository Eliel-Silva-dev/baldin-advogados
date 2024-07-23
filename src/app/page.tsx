import HeaderSection from '@/components/HeaderSection';
import style from './page.module.css';

export default function Home() {
  return (
    <>
      <HeaderSection
        title="Contribuido ativamente para o Sucesso de cada Cliente"
        message="Soluções jurídicas, negociais, e estratégicas focadas no resultado!"
      />
      <main id={style.main_Home}>
        <h2>Pagina inicial...</h2>
      </main>
    </>
  );
}
