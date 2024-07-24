'use client';

import ContactSection from '@/components/ContactSection';
import style from './style.min.module.css';
import areasAtuacao from '@/database/AreasAtuacao';

const Labor = () => {
  const laborData = areasAtuacao.filter((area) => area.title == 'TRABALHISTA');
  const activeCard = (el: HTMLElement) => {
    const elPai = el.parentNode as HTMLElement;
    const subTitle = document.querySelectorAll(
      '.style_min_subtitle_labor__roBbz',
    ) as NodeList;

    if (!elPai.classList.contains('style_min_active_sub__VIzPF')) {
      subTitle.forEach((sub) => {
        const subT = sub as HTMLElement;
        subT.classList.remove('style_min_active_sub__VIzPF');
      });

      elPai.classList.add('style_min_active_sub__VIzPF');
    } else {
      elPai.classList.remove('style_min_active_sub__VIzPF');
    }
  };
  return (
    <main id={style.main_Labor}>
      {laborData &&
        laborData.map((area, idx) => (
          <section key={idx}>
            <div className={style.container_image}>
              <img src={area.imgCard} alt={area.title} />
            </div>
            <div className={style.container_info}>
              <h2>{area.title}</h2>
              <div className={style.container_card_labor}>
                {area.subAreas &&
                  area.infoSub.map((infoSub, idx) => (
                    <div key={idx} className={style.card_labor}>
                      <div className={style.subtitle_labor}>
                        <h3
                          onClick={(e) => activeCard(e.target as HTMLElement)}
                        >
                          {infoSub.subTitle}
                        </h3>
                      </div>
                      <div className={style.message_labor}>
                        {infoSub.message &&
                          infoSub.message.map((mess, idx) => (
                            <p key={idx}>{mess}</p>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
      <ContactSection />
    </main>
  );
};

export default Labor;
