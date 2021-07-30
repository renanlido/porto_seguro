import Image from 'next/image';

import seloANS from '../../../assets/seloANS.png';
import marlin from '../../../assets/marlinLogo.png';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div>
        <Image src={seloANS} width={89} height={19} />
      </div>

      <div className={styles.footer_marlin_logo}>
        Desenvolvimento: <Image src={marlin} width={47} height={20} />
      </div>

      <p>
        Todos os direitos reservados. © 2021
        <br />
        Norte a Sul Corretora de Seguros de Vida, Capitalização,
        <br />
        Previdência Privada e Planos de Saúde LTDA
        <br />
        CNPJ 14.280.310/0001-11
        <br />
        Av. Nilo Peçanha, 50 - Sala 809 - Centro
        <br />
        Rio de Janeiro/RJ - CEP: 20.020-906
      </p>
    </footer>
  );
}
