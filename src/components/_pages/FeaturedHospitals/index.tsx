import { useBreakPointValue } from '../../../contexts/BreakPointContext';
import { useDrop } from '../../../contexts/DropContext';
import { Card } from '../../Card';
import { Container } from '../../DefaultContainer';
import { H1 } from '../../HTMLElements/H1';
import { H2 } from '../../HTMLElements/H2';
import { Separator } from '../../Separator';

import styles from './styles.module.scss';

type CardData = {
  id: string;
  imageName: string;
  title: string;
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

type CardProps = {
  data: CardData[];
};

export function FeaturedHospitals({ data: featuredHospitals }: CardProps) {
  const { isWide } = useBreakPointValue();
  const { isFeaturedHospitalsActive } = useDrop();

  return (
    <Container id="#featuredHospitals">
      <H1>Hospitais em destaque</H1>
      <Separator />
      <H2>
        Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro
        dispõe para sua empresa as redes mais referenciadas com diversos
        benefícios para que você tenha um atendimento totalmente personalizado.
      </H2>

      <div className={styles.container_cards}>
        {featuredHospitals.map(featuredHospital => (
          <Card
            key={featuredHospital.id}
            cardData={{
              title: featuredHospital.title,
              imageName: featuredHospital.imageName,
              details: featuredHospital.details
            }}
            isButtonVisible
          />
        ))}
      </div>
      <div
        className={styles.card_isActive}
        style={{
          display: isFeaturedHospitalsActive && isWide ? 'block' : 'none'
        }}
      />
    </Container>
  );
}
