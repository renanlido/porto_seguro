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
  return (
    <Container>
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
              imageName: featuredHospital.imageName,
              details: featuredHospital.details
            }}
          >
            <div className={styles.featuredHospitals_card_content}>
              <h1>{featuredHospital.title}</h1>
              <button type="button">
                <span className={styles.seta_baixo} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
