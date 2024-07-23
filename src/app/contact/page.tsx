'use client';

import HeaderDiv from '@/components/HeaderDiv';
import style from './style.min.module.css';
import FormContact from '@/components/FormContact';

const Contact = () => {
  return (
    <>
      <HeaderDiv title="Contact" />
      <main id={style.main_Contact}>
        <section className={style.contact_address}>
          <div>
            <h2>Contato</h2>
            <p>Conte com a experiência de nossa equipe.</p>
          </div>
          <div>
            <h3>Endereço:</h3>
            <p>
              R. Oscár Alves Costa, 177 Jd. Santa Genebra II (Barão Geraldo) -
              Campinas – SP, 13084-762
            </p>
          </div>
          <div>
            <h3>Celular/WhatsApp:</h3>
            <p>
              <span>+55 19 9 9856-5139</span>
            </p>
          </div>
          <div>
            <h3>Telefone</h3>
            <p>
              <span>+55 19 3291.6417</span>
            </p>
          </div>
          <div>
            <h3>E-mail</h3>
            <p>
              <span>contato@baldinadv.com.br</span>
            </p>
          </div>
        </section>
        <FormContact />
      </main>
    </>
  );
};

export default Contact;
