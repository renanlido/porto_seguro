import styles from './styles.module.scss';

import { MaxWidthCentralizedDiv } from '../Utils/MaxWidithCetralizedDiv';

export function Header() {
  return (
    <div className={styles.container}>
      <MaxWidthCentralizedDiv>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Conforto e qualidade para levar bem-estar com alto padrão de
            atendimento a seus funcionários.
          </h1>
          <div className={styles.separator} />

          <div className={styles.gold_plan}>
            Conheça o plano Ouro da Porto Seguro Saúde.
          </div>

          <div className={styles.price_info}>
            <div className={styles.price_info_content}>
              <h3 className={styles.t1}>A partir de</h3>
              <h3 className={styles.t2}>R$</h3>
              <h3 className={styles.t3}>255</h3>
              <h3 className={styles.t4}>,65*</h3>
            </div>
            <a href="#">VER MAIS</a>
          </div>

          <p className={styles.text_bottom}>
            *Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9
            vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem
            IOF.
            <br />
            Promoção válida até 30 de abril de 2021.
          </p>
        </div>
      </MaxWidthCentralizedDiv>
    </div>
  );
}
