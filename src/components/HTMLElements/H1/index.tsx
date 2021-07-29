import styles from './styles.module.scss';

type H1Props = {
  children: React.ReactNode;
};

export function H1({ children }: H1Props) {
  return <h1 className={styles.heading1}>{children}</h1>;
}
