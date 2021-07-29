// import { Header } from '../components/Header';
import { GetServerSideProps } from 'next';
import { uuid } from 'uuidv4';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { FeaturedHospitals } from '../components/_pages/FeaturedHospitals';
import { Footer } from '../components/_pages/Footer';
import { PlanBenefits } from '../components/_pages/PlanBenefits';
import { WantKnowMore } from '../components/_pages/WantKnowMore';

// import { GoldPlan } from '../components/pages/GoldPlan';

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

export default function Home({ data }: CardProps) {
  return (
    <div className={styles.container}>
      <Menu />
      <Header />
      <FeaturedHospitals data={data} />
      <PlanBenefits />
      <WantKnowMore />
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data: CardData[] = [
    {
      id: uuid(),
      imageName: 'vitoriaBarra',
      title: 'Hospital Vitória Barra',
      details: {
        text: 'O Complexo Pediátrico do Hospital Vitória conta com uma equipe de pronto atendimento formada por <b>pediatras, cirurgiões e ortopedistas</b>, além de profissionais de diversas subespecialidades da pediatria, capacitados para assistência a urgências e emergências de pacientes recém-nascidos e até os 18 anos de idade.',
        adress: {
          street: 'Av. Jorge Curi, 550',
          neighborhood: 'Barra da Tijuca',
          state: 'Rio de Janeiro',
          uf: 'RJ',
          cep: '22775-001'
        },
        phone: {
          ddd: '21',
          number: '3263-2000'
        }
      }
    },
    {
      id: uuid(),
      imageName: 'laranjeiras',
      title: 'Hospital Perinatal Laranjeiras',
      details: {
        text: 'O Complexo Pediátrico do Hospital Vitória conta com uma equipe de pronto atendimento formada por <b>pediatras, cirurgiões e ortopedistas</b>, além de profissionais de diversas subespecialidades da pediatria, capacitados para assistência a urgências e emergências de pacientes recém-nascidos e até os 18 anos de idade.',
        adress: {
          street: 'Av. Jorge Curi, 550',
          neighborhood: 'Barra da Tijuca',
          state: 'Rio de Janeiro',
          uf: 'RJ',
          cep: '22775-001'
        },
        phone: {
          ddd: '21',
          number: '3263-2000'
        }
      }
    },
    {
      id: uuid(),
      imageName: 'copa_dor',
      title: "Hospital Copa D'Or",
      details: {
        text: 'O Complexo Pediátrico do Hospital Vitória conta com uma equipe de pronto atendimento formada por <b>pediatras, cirurgiões e ortopedistas</b>, além de profissionais de diversas subespecialidades da pediatria, capacitados para assistência a urgências e emergências de pacientes recém-nascidos e até os 18 anos de idade.',
        adress: {
          street: 'Av. Jorge Curi, 550',
          neighborhood: 'Barra da Tijuca',
          state: 'Rio de Janeiro',
          uf: 'RJ',
          cep: '22775-001'
        },
        phone: {
          ddd: '21',
          number: '3263-2000'
        }
      }
    }
  ];

  return {
    props: {
      data
    }
  };
};
