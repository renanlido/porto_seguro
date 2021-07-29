import { useBreakPointValue } from '../../../contexts/BreakPointContext';
import { Button } from '../../Button';
import { Card } from '../../Card';
import { Container } from '../../DefaultContainer';
import { H1 } from '../../HTMLElements/H1';
import { Separator } from '../../Separator';

import styles from './styles.module.scss';

export function PlanBenefits() {
  const { isWide } = useBreakPointValue();

  return (
    <Container>
      <H1>Benefícios do plano</H1>
      <Separator />

      <div className={styles.plan_benefits_container_cards}>
        <Card
          cardData={{ imageName: 'recepcao' }}
          cardProps={{
            imageHeight: `${isWide ? '266px' : '162px'}`,
            imageWidth: `${isWide ? '504px' : '340px'}`,
            cardMaxWidth: `${isWide ? '504px' : '340px'}`
          }}
        >
          <div className={styles.plan_benefits_content_cards}>
            <h1 className={styles.plan_benefits_card_title}>
              Rede referenciada
            </h1>
            <p className={styles.plan_benefits_card_text}>
              Com o plano Ouro da Porto Seguro Saúde, você conta com uma rede{' '}
              <b>referenciada de hospitais</b> com toda a comodidade que você e
              seus funcionários precisam.
            </p>

            <Button>VEJA A LISTA COMPLETA DE HOSPITAIS </Button>
          </div>
        </Card>

        <Card
          cardData={{
            imageName: 'humanHandInsertCoinPig'
          }}
          cardProps={{
            imageHeight: `${isWide ? '266px' : '162px'}`,
            imageWidth: `${isWide ? '504px' : '340px'}`,
            cardMaxWidth: `${isWide ? '504px' : '340px'}`
          }}
        >
          <div className={styles.plan_benefits_content_cards}>
            <h1 className={styles.plan_benefits_card_title}>
              Reembolso de consultas e exames simples
            </h1>
            <p className={styles.plan_benefits_card_text}>
              Com o plano Ouro, receba o{' '}
              <b>reembolso de seus exames e consultas</b> em até <b>48 horas</b>{' '}
              úteis, a partir da data de entrega de todos os documentos
              necessários.
              <br /> <br /> Plano Ouro Max: <b>R$280,00</b>
            </p>
          </div>
        </Card>
      </div>
    </Container>
  );
}
