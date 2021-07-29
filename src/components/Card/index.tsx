import { CardDetails } from './CardDetails/CardDetailsMobile';
import { CardDetailsWide } from './CardDetails/CardDetailsWide';

import styles from './styles.module.scss';

type CardProps = {
  cardData: {
    imageName: string;
    details?: {
      text: string;
      adress: {
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
  cardProps?: {
    imageHeight?: string;
    imageWidth?: string;
    cardMaxWidth?: string;
  };
  children: React.ReactNode;
};

export function Card({ cardData, children, cardProps }: CardProps) {
  return (
    <div
      className={styles.card}
      style={{
        marginBottom: '0',
        maxWidth: `${cardProps?.cardMaxWidth && cardProps.cardMaxWidth}`
      }}
    >
      <div
        className={styles.image}
        style={{
          background: `url('/assets/${cardData.imageName}.png') no-repeat center center`,
          backgroundSize: 'cover',
          height: `${cardProps?.imageHeight && cardProps.imageHeight}`,
          width: `${cardProps?.imageWidth && cardProps.imageWidth}`
        }}
      />
      {children}

      <CardDetails details={cardData.details} />
      <CardDetailsWide details={cardData.details} />
    </div>
  );
}
