'use client';

import ContactSection from '@/components/ContactSection';
import style from './style.min.module.css';
import areasAtuacao from '@/database/AreasAtuacao';
import { FaArrowTurnDown } from 'react-icons/fa6';

const Tax = () => {
  const taxData = areasAtuacao.filter((area) => area.title == 'TRIBUTÁRIO');
  const activeCard = (el: HTMLElement) => {
    const elPai = el.parentNode as HTMLElement;
    const subTitle = document.querySelectorAll(
      '.style_min_subtitle_tax__wzG5R',
    ) as NodeList;

    if (!elPai.classList.contains('style_min_active_sub__I2OS9')) {
      subTitle.forEach((sub) => {
        const subT = sub as HTMLElement;
        subT.classList.remove('style_min_active_sub__I2OS9');
      });

      elPai.classList.add('style_min_active_sub__I2OS9');
    } else {
      elPai.classList.remove('style_min_active_sub__I2OS9');
    }
  };
  return (
    <main id={style.main_Tax}>
      {taxData &&
        taxData.map((area, idx) => (
          <section key={idx}>
            <div className={style.container_image}>
              <img src={area.imgCard} alt={area.title} />
            </div>
            <div className={style.container_info}>
              <h2>{area.title}</h2>
              <div className={style.container_card_tax}>
                {area.subAreas &&
                  area.infoSub.map((infoSub, idx) => (
                    <div key={idx} className={style.card_tax}>
                      <div className={style.subtitle_tax}>
                        <h3
                          onClick={(e) => activeCard(e.target as HTMLElement)}
                        >
                          {infoSub.subTitle} &#8628;
                        </h3>
                      </div>
                      <div className={style.message_tax}>
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

export default Tax;
