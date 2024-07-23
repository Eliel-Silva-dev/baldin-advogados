import HeaderDiv from '@/components/HeaderDiv';
import style from './style.min.module.css';
import ContactSection from '@/components/ContactSection';
import { FaArrowsToEye, FaArrowUpRightDots, FaListUl } from 'react-icons/fa6';

const About = () => {
  return (
    <>
      <HeaderDiv title="Sobre" />
      <main id={style.main_About}>
        <section id={style.info_about}>
          <div>
            <div>
              <h3>BALDIN ADVOGADOS</h3>
              <h2>Quem Somos</h2>
            </div>
            <div>
              <p>
                O escritório Baldin Advogados atua por meio de soluções rápidas,
                seguras e originais no atendimento de pessoas físicas e
                jurídicas.
              </p>
              <p>
                Com foco na excelência técnica, estratégia, agilidade e
                pessoalidade, o Baldin Advogados se consolidou como referência
                no mercado no eixo Campinas-São Paulo por oferecer não apenas
                suporte jurídico de confiança, mas também assessoria na tomada
                de decisões negociais e consultoria estratégica de negócio
                personalizada para cada tipo de business e perfil do
                investidor/empresário.
              </p>
            </div>
          </div>
        </section>
        <section id={style.img_about}>
          <img src="/img/imgAbout.jpg" alt="Imagem do escritótio baldin" />
          <img src="/img/imgAbout3.jpg" alt="Imagem do escritótio baldin" />
        </section>
        <section id={style.value}>
          <div className={style.about_card}>
            <h3>
              {' '}
              <FaArrowsToEye /> Missão
            </h3>
            <ul>
              <li>
                Compromisso na excelência técnica e na agilidade da entrega do
                serviço.
              </li>
              <li>
                Prestar um atendimento personalizado e qualificado de forma ágil
                e efetiva.
              </li>
              <li>
                Ser reconhecido como uma referência na assessoria jurídica
                dentro das áreas atendidas.
              </li>
            </ul>
          </div>
          <div className={style.about_card}>
            <h3>
              {' '}
              <FaListUl /> Diferença
            </h3>
            <ul>
              <li>
                Agilidade, responsabilidade e comprometimento, com os problemas
                do cliente.
              </li>
              <li>
                Soluções jurídicas, negociais e estratégicas focadas no
                resultado da operação.
              </li>
              <li>
                Segurança jurídica além da sua excelência profissional
                reconhecida.
              </li>
            </ul>
          </div>
          <div className={style.about_card}>
            <h3>
              {' '}
              <FaArrowUpRightDots /> Valores
            </h3>
            <ul>
              <li>
                Aliar ética, respeito junto a confidencialidade e sua capacidade
                técnica.
              </li>
              <li>Contribuir ativamente para o sucesso de cada cliente.</li>
            </ul>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
};

export default About;
