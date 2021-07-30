import { FiMapPin } from 'react-icons/fi';
import { TiPhoneOutline } from 'react-icons/ti';
import { useBreakPointValue } from '../../../../contexts/BreakPointContext';
import { Strong } from '../../../HTMLElements/Strong';
import styles from './styles.module.scss';

type CardDetailsProps = {
  details?: {
    text?: string;
    adress?: {
      street: string;
      neighborhood: string;
      state: string;
      uf: string;
      cep: string;
    };
    phone?: {
      ddd: string;
      number: string;
    };
  };
  isActive: boolean;
};

export function CardDetails({ details, isActive }: CardDetailsProps) {
  const { isWide } = useBreakPointValue();

  return details ? (
    <div
      className={styles.card_details_mobile}
      style={{ display: isActive && !isWide ? 'block' : 'none' }}
    >
      {details.text !== null && (
        <p dangerouslySetInnerHTML={{ __html: details.text }} />
      )}
      <hr />
      <div className={styles.card_details_mobile_container_adress}>
        <div className={styles.card_details_mobile_adress}>
          <FiMapPin />
          <Strong>Endereço:</Strong>
          <span className={styles.card_details_mobile_detailed_adress}>
            {details.adress.street} <br />
            {details.adress.neighborhood}, {details.adress.state} -{' '}
            {details.adress.uf}
            <br />
            {details.adress.cep}
          </span>
        </div>

        <div className={styles.card_details_mobile_phone}>
          <TiPhoneOutline />
          <Strong>Telefone:</Strong>({details.phone.ddd}) {details.phone.number}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
