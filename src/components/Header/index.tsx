import { Link } from 'react-scroll';

import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_content}>
        <h1 className={styles.header_title}>
          Conforto e qualidade para levar bem-estar com alto padrão de
          atendimento a seus funcionários.
        </h1>
        <div className={styles.header_separator} />

        <div className={styles.header_gold_plan}>
          Conheça o plano Ouro da Porto Seguro Saúde.
        </div>

        <div className={styles.header_price_info}>
          <div className={styles.header_price_info_content}>
            <h3 className={styles.header_t1}>A partir de</h3>
            <h3 className={styles.header_t2}>R$</h3>
            <h3 className={styles.header_t3}>255</h3>
            <h3 className={styles.header_t4}>,65*</h3>
          </div>
          <Link
            to="#featuredHospitals"
            href="#featuredHospitals"
            offset={-100}
            smooth
          >
            VER MAIS
          </Link>
        </div>

        <p className={styles.header_text_bottom}>
          *Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9
          vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF.
          <br />
          Promoção válida até 30 de abril de 2021.
        </p>
      </div>
    </div>
  );
}
