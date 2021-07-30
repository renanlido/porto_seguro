import { FiX } from 'react-icons/fi';
import { GoArrowDown } from 'react-icons/go';
import { useDrop } from '../../contexts/DropContext';
import { Button } from '../Button';
import { H1 } from '../HTMLElements/H1';

import styles from './styles.module.scss';

export function CompleteListHospitalsDrop() {
  const { completeListHospitalsRef, onClose, isCompleteListActive } = useDrop();
  return (
    <div
      className={styles.completeListHospitalsDrop_container}
      ref={completeListHospitalsRef}
      style={{ visibility: isCompleteListActive ? 'visible' : 'hidden' }}
    >
      <div className={styles.completeListHospitalsDrop_content}>
        <button
          type="button"
          className={styles.completeListHospitalsDorp_cross}
          onClick={onClose}
        >
          <FiX fontSize="26px" />
        </button>
        <div className={styles.completeListHospitalsDorp_text}>
          <H1>Hospitais de referência</H1>
          <p>
            <b>Rio de Janeiro:</b>
            <br />- Copa D’or
            <br />- Quinta D’or
            <br />- Barra D’or
            <br />- Casa de Saúde São Jose (Humaitá)
            <br />- Clínica São Vicente da Gávea
            <br />- Hospital Vitória (Barra)
            <br />- Perinatal Laranjeiras
            <br />- Perinatal Barra
          </p>

          <p>
            <b>São Paulo:</b>
            <br />- Hospital Alemão Oswaldo Cruz
            <br />- Hospital 9 de Julho
            <br />- Hospital São Luiz – Anália Franco / Itaim /Morumbi / S.C.
            Sul
          </p>

          <Button>
            <GoArrowDown fontSize="11px" />
            BAIXE A LISTA COMPLETA DE HOSPITAIS
          </Button>
        </div>
      </div>
    </div>
  );
}
