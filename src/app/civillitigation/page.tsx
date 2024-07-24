'use client';

import ContactSection from '@/components/ContactSection';
import style from './style.min.module.css';
import areasAtuacao from '@/database/AreasAtuacao';

const civilLitigation = () => {
  const civillitigationData = areasAtuacao.filter(
    (area) => area.title == 'Contencioso Cível',
  );
  const activeCard = (el: HTMLElement) => {
    const elPai = el.parentNode as HTMLElement;
    const subTitle = document.querySelectorAll(
      '.style_min_subtitle_litigation__1irgJ',
    ) as NodeList;

    if (!elPai.classList.contains('style_min_active_sub__5BiXB')) {
      subTitle.forEach((sub) => {
        const subT = sub as HTMLElement;
        subT.classList.remove('style_min_active_sub__5BiXB');
      });

      elPai.classList.add('style_min_active_sub__5BiXB');
    } else {
      elPai.classList.remove('style_min_active_sub__5BiXB');
    }
  };

  return (
    <main id={style.main_litigation}>
      {civillitigationData &&
        civillitigationData.map((area, idx) => (
          <section key={idx}>
            <div className={style.container_image}>
              <img src={area.imgCard} alt={area.title} />
            </div>
            <div className={style.container_info}>
              <h2>{area.title}</h2>
              <div className={style.container_card_litigation}>
                {area.subAreas &&
                  area.infoSub.map((infoSub, idx) => (
                    <div key={idx} className={style.card_litigation}>
                      <div className={style.subtitle_litigation}>
                        <h3
                          onClick={(e) => activeCard(e.target as HTMLElement)}
                        >
                          {infoSub.subTitle} &#8628;
                        </h3>
                      </div>
                      <div className={style.message_litigation}>
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

export default civilLitigation;
