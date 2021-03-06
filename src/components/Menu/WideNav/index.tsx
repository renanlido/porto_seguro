import { Link } from 'react-scroll';

import styles from './styles.module.scss';

// MENU WIDE VERSION

export function WideNav() {
  return (
    <ul className={styles.wide_nav}>
      <li>
        <Link to="#sobre" href="#beneficios" offset={-130} smooth>
          Sobre
        </Link>
      </li>
      <li>
        <Link to="#featuredHospitals" href="#hospitais" offset={-130} smooth>
          Hospitais
        </Link>
      </li>
      <li>
        <Link to="#beneficios" href="#beneficios" offset={-130} smooth>
          Benefícios
        </Link>
      </li>
      <li>
        <Link
          to="#servicos_especiais"
          href="#servicos_especiais"
          offset={-130}
          smooth
        >
          Serviços especiais
        </Link>
      </li>
      <li>
        <Link to="#wantToSayMore" href="#wantToSayMore" offset={-130} smooth>
          Contatos
        </Link>
      </li>
    </ul>
  );
}
