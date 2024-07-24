'use client';

import ContactSection from '@/components/ContactSection';
import style from './style.min.module.css';
import areasAtuacao from '@/database/AreasAtuacao';

const Compliance = () => {
  const complianceData = areasAtuacao.filter(
    (area) => area.title == 'Compliance',
  );
  const activeCard = (el: HTMLElement) => {
    const elPai = el.parentNode as HTMLElement;
    const subTitle = document.querySelectorAll(
      '.style_min_subtitle_compliance__AvoGq',
    ) as NodeList;

    if (!elPai.classList.contains('style_min_active_sub__iLxft')) {
      subTitle.forEach((sub) => {
        const subT = sub as HTMLElement;
        subT.classList.remove('style_min_active_sub__iLxft');
      });

      elPai.classList.add('style_min_active_sub__iLxft');
    } else {
      elPai.classList.remove('style_min_active_sub__iLxft');
    }
  };
  return (
    <main id={style.main_Compliance}>
      {complianceData &&
        complianceData.map((area, idx) => (
          <section key={idx}>
            <div className={style.container_image}>
              <img src={area.imgCard} alt={area.title} />
            </div>
            <div className={style.container_info}>
              <h2>{area.title}</h2>
              <div className={style.container_card_compliance}>
                {area.subAreas &&
                  area.infoSub.map((infoSub, idx) => (
                    <div key={idx} className={style.card_compliance}>
                      <div className={style.subtitle_compliance}>
                        <h3
                          onClick={(e) => activeCard(e.target as HTMLElement)}
                        >
                          {infoSub.subTitle} &#8628;
                        </h3>
                      </div>
                      <div className={style.message_compliance}>
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

export default Compliance;
