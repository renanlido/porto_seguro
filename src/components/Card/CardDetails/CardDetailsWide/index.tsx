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

export function CardDetailsWide({ details, isActive }: CardDetailsProps) {
  const { isWide } = useBreakPointValue();

  console.log(isActive);

  return details ? (
    <div
      className={styles.card_details_wide}
      style={{ display: isWide && isActive ? 'flex' : 'none' }}
    >
      {details.text !== null && (
        <p dangerouslySetInnerHTML={{ __html: details.text }} />
      )}
      <hr />
      <div className={styles.card_details_wide_container_adress}>
        <div className={styles.card_details_wide_adress}>
          <FiMapPin />
          <Strong>Endereço:</Strong>
          <span className={styles.card_details_wide_detailed_adress}>
            {details.adress.street} <br />
            {details.adress.neighborhood}, {details.adress.state} -{' '}
            {details.adress.uf}
            <br />
            {details.adress.cep}
          </span>
        </div>

        <div className={styles.card_details_wide_phone}>
          <TiPhoneOutline />
          <Strong>Telefone:</Strong>({details.phone.ddd}) {details.phone.number}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
