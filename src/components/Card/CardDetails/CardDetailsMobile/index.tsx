import { FiMapPin } from 'react-icons/fi';
import { TiPhoneOutline } from 'react-icons/ti';
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
};

export function CardDetails({ details }: CardDetailsProps) {
  return details ? (
    <div className={styles.card_details}>
      {details.text !== null && (
        <p dangerouslySetInnerHTML={{ __html: details.text }} />
      )}
      <hr />
      <div className={styles.container_adress}>
        <div className={styles.adress}>
          <FiMapPin />
          <Strong>Endereço:</Strong>
          <span className={styles.detailed_adress}>
            {details.adress.street} <br />
            {details.adress.neighborhood}, {details.adress.state} -{' '}
            {details.adress.uf}
            <br />
            {details.adress.cep}
          </span>
        </div>

        <div className={styles.phone}>
          <TiPhoneOutline />
          <Strong>Telefone:</Strong>({details.phone.ddd}) {details.phone.number}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
