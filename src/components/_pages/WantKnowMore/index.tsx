import Image from 'next/image';
import * as Yup from 'yup';
import { validatePhone } from 'validations-br';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FaWhatsapp } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';

import { Container } from '../../DefaultContainer';
import { H1 } from '../../HTMLElements/H1';
import { Separator } from '../../Separator';

import styles from './styles.module.scss';
import phoneCall from '../../../assets/phoneCall.svg';
import imNotRobot from '../../../assets/imNotRobot.png';
import { Button } from '../../Button';
import { Input } from '../../Form/Input';

interface WantKnowMoreFormData {
  name: string;
  email: string;
  phone: string;
}

// SCHEMA TO VERIFICATION INPUT DATA
const createWantKnowMoreSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  phone: Yup.string()
    .required('Telefone obrigatório')
    .test('is-phone', 'Telefone inválido', value => validatePhone(value))
});

// PAGE WANTK KNOW MORE INFORMATIONS
export function WantKnowMore() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<WantKnowMoreFormData>({
    resolver: yupResolver(createWantKnowMoreSchema)
  });

  // FUNCTION TO SEND DATA FOR THE DATABASE
  const handleSubmitContact: SubmitHandler<WantKnowMoreFormData> = ({
    email,
    phone,
    name
  }) => {
    console.log(email, phone, name);
  };

  return (
    <Container id="#wantToSayMore">
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
          <form
            className={styles.wantKnowMore_form}
            onSubmit={handleSubmit(handleSubmitContact)}
          >
            <Input
              name="name"
              label="Seu nome"
              placeholder="Insira seu nome aqui"
              ref={register}
              error={errors.name}
              {...register('name')}
            />

            <Input
              name="phone"
              label="Seu telefone"
              placeholder="(DDD)99999-9999"
              ref={register}
              error={errors.phone}
              {...register('phone')}
            />

            <Input
              name="email"
              label="Seu telefone"
              placeholder="seuemail@email.com"
              ref={register}
              error={errors.email}
              {...register('email')}
            />

            <div className={styles.wantKnowMore_form_image}>
              <Image src={imNotRobot} width={340} height={101} />
            </div>

            <Button type="submit">ENVIAR CONTATO</Button>
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
