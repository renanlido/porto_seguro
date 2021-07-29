import Image from 'next/image';

import { FaWhatsapp } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';

import { Container } from '../../DefaultContainer';
import { H1 } from '../../HTMLElements/H1';
import { Separator } from '../../Separator';

import styles from './styles.module.scss';
import phoneCall from '../../../assets/phoneCall.svg';
import imNotRobot from '../../../assets/imNotRobot.png';
import { Button } from '../../Button';

export function WantKnowMore() {
  return (
    <Container>
      <H1>Quer saber mais?</H1>

      <Separator />

      <div className={styles.wantKnowMore_content}>
        <div className={styles.wantKnowMore_title}>
          <div>
            <Image src={phoneCall} layout="fill" />
          </div>
          <p>
            Ainda sobrou alguma dúvida sobre qual o melhor Plano para sua
            empresa? Envie seus dados e deixe que a NS Benefícios entrará em
            contato assim que possível.
          </p>
        </div>

        <div className={styles.wantKnowMore_bottom_content}>
          <form className={styles.wantKnowMore_form}>
            <div>
              <h3>Seu nome:</h3>
              <input id="name" type="text" placeholder="Seu nome." />
            </div>

            <div>
              <h3>Telefone:</h3>
              <input type="text" placeholder="(DDD) 99999-9999" />
            </div>

            <div>
              <h3>Email:</h3>
              <input type="email" placeholder="seuemail@email.com" />
            </div>

            <div className={styles.wantKnowMore_form_image}>
              <Image src={imNotRobot} width={340} height={101} />
            </div>

            <Button type="button">ENVIAR CONTATO</Button>
          </form>

          <div className={styles.wantKnowMore_bottom_separator} />

          <div className={styles.wantKnowMore_contactUsNow}>
            <h2>FALE CONOSCO AGORA MESMO:</h2>
            <span>4020-6440</span>

            <button type="button" className={styles.wantKnowMore_button}>
              <FaWhatsapp fontSize="50px" />
              <span>CLIQUE PARA ENVIAR UMA MENSAGEM</span>
            </button>

            <button type="button" className={styles.wantKnowMore_button}>
              <MdLocalPhone fontSize="50px" />
              <span>CLIQUE PARA LIGAR</span>
            </button>

            <p>Horário de Atendimento de 8h às 17h</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
