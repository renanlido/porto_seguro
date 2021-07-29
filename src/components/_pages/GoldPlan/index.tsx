import Image from 'next/image';

import { GoArrowDown } from 'react-icons/go';
import ouro from '../../../assets/ouro.png';

import styles from './styles.module.scss';

export function GoldPlan() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>O plano Ouro é ideal para sua empresa</h1>
        <div className={styles.separator} />
        <p>
          Com o plano Ouro, os beneficiários contam com uma ampla Rede
          Referenciada de hospitais e laboratórios, além de terem mais
          flexibilidade para solicitar o reembolso de consultas e exames, de
          forma ágil e prática, e o conforto da acomodação hospitalar em
          apartamento.
        </p>

        <div className={styles.card}>
          <div className={styles.card_text}>
            <div className={styles.card_text_column_1}>
              <h1>Plano Ouro</h1>
              <div className={styles.card_text_column_1_price}>
                <h3>A partir de</h3>
                <div className={styles.price_info_content}>
                  <h3 className={styles.t1}>R$</h3>
                  <h3 className={styles.t2}>255</h3>
                  <h3 className={styles.t3}>,65*</h3>
                </div>
              </div>
            </div>
            <div className={styles.card_text_column_2}>
              <p>
                *Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3
                à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18
                anos. Sem IOF. Promoção válida até 30 de abril de 2021.
              </p>

              <Image src={ouro} alt="Plano Ouro" width={89} height={19} />
            </div>
          </div>

          <div className={styles.card_buttons}>
            <button type="button">VEJA A COBERTURA COMPLETA</button>
            <button type="button">
              <div>
                <GoArrowDown fontSize="11px" />
                <div />
              </div>
              BAIXE A TABELA DE PREÇOS DO PLANO
              <div />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
