import { useState } from 'react';
import { useDrop } from '../../contexts/DropContext';
import { CardDetails } from './CardDetails/CardDetailsMobile';
import { CardDetailsWide } from './CardDetails/CardDetailsWide';

import styles from './styles.module.scss';

type CardProps = {
  cardData: {
    title?: string;
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
  children?: React.ReactNode;
  isButtonVisible?: boolean;
};

// CARD COMPONENT

export function Card({
  cardData,
  children,
  cardProps,
  isButtonVisible
}: CardProps) {
  const [isActive, setIsActive] = useState(false); // state to check whether card details are being displayed or not
  const { onOpen } = useDrop();

  return (
    <div
      className={styles.card}
      style={{
        marginBottom: '0',
        maxWidth: `${cardProps?.cardMaxWidth && cardProps.cardMaxWidth}`
      }}
    >
      <div
        className={styles.card_image}
        style={{
          background: `url('/assets/${cardData.imageName}.png') no-repeat center center`,
          backgroundSize: 'cover',
          height: `${cardProps?.imageHeight && cardProps.imageHeight}`,
          width: `${cardProps?.imageWidth && cardProps.imageWidth}`
        }}
      />
      <div
        className={styles.card_button_content}
        style={{ display: isButtonVisible && 'flex' }}
      >
        <h1>{cardData.title}</h1>
        <button
          type="button"
          onClick={() => {
            setIsActive(!isActive);
            onOpen('featuredHospitals');
          }}
        >
          <span className={styles.card_seta_baixo} />
        </button>
      </div>
      {children}
      <CardDetails details={cardData.details} isActive={isActive} />
      <CardDetailsWide details={cardData.details} isActive={isActive} />
    </div>
  );
}
