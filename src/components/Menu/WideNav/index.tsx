import styles from './styles.module.scss';

export function WideNav() {
  return (
    <ul className={styles.wide_nav}>
      <li>
        <a href="#">Sobre</a>
      </li>
      <li>
        <a href="#">Contatos</a>
      </li>
      <li>
        <a href="#">Benefícios</a>
      </li>
      <li>
        <a href="#">Serviços especiais</a>
      </li>
      <li>
        <a href="#">Contatos</a>
      </li>
    </ul>
  );
}
