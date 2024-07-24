import HeaderSection from '@/components/HeaderSection';
import style from './page.module.css';
import areasAtuacao from '@/database/AreasAtuacao';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeaderSection
        title="Contribuido ativamente para o Sucesso de cada Cliente"
        message="Soluções jurídicas, negociais, e estratégicas focadas no resultado!"
      />
      <main id={style.main_Home}>
        <h2>Nossos Serviços</h2>
        <p>Veja como podemos ajudá-lo</p>
        <div className={style.container_atuacao}>
          {areasAtuacao &&
            areasAtuacao.map((area, idx) => (
              <div key={idx} className={style.atuacao_Card}>
                <div className={style.img_card}>
                  <img src={area.imgCard} alt={area.title} />
                </div>
                <div className={style.info_card}>
                  <h3>{area.title}</h3>
                  <div>
                    {area.subAreas &&
                      area.subAreas.map((sub, idx) => <p key={idx}>- {sub}</p>)}
                  </div>
                  <Link href={area.href}>Saiba mais</Link>
                </div>
              </div>
            ))}
        </div>
        <ContactSection />
      </main>
    </>
  );
}
