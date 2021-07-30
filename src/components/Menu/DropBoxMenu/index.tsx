import { Link } from 'react-scroll';

import { FaWhatsapp } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';

import styles from './styles.module.scss';
import { useDrop } from '../../../contexts/DropContext';

export function DropBoxMenu() {
  const { dropdownRef, isActive, onClose } = useDrop();

  return (
    // DROP BOX MENU MOBILE
    <nav
      ref={dropdownRef}
      className={styles.dropBoxMenu_container}
      style={{ display: isActive ? 'block' : 'none' }}
    >
      <ul>
        <li>
          <Link to="#sobre" href="#sobre" onClick={onClose} smooth>
            SOBRE
          </Link>
        </li>
        <li>
          <Link
            to="#featuredHospitals"
            href="#featuredHospitals"
            onClick={onClose}
            smooth
          >
            HOSPITAIS
          </Link>
        </li>
        <li>
          <Link to="#beneficios" href="#beneficios" onClick={onClose} smooth>
            BENEFÍCIOS
          </Link>
        </li>
        <li>
          <Link to="#servicos" href="#servicos" onClick={onClose} smooth>
            SERVIÇOS ESPECIAIS
          </Link>
        </li>
        <li>
          <Link
            to="#wantToSayMore"
            href="#wantToSayMore"
            onClick={onClose}
            smooth
          >
            CONTATO
          </Link>
        </li>
      </ul>

      <div>
        <div className={styles.dropBoxMenu_contactUsNow}>
          <h2>FALE CONOSCO AGORA MESMO:</h2>
          <span>4020-6440</span>

          <button type="button" className={styles.dropBoxMenu_contactUs_button}>
            <FaWhatsapp fontSize="50px" />
            <span>CLIQUE PARA ENVIAR UMA MENSAGEM</span>
          </button>

          <button type="button" className={styles.dropBoxMenu_contactUs_button}>
            <MdLocalPhone fontSize="50px" />
            <span>CLIQUE PARA LIGAR</span>
          </button>

          <p>Horário de Atendimento de 8h às 17h</p>
        </div>
      </div>
    </nav>
  );
}
