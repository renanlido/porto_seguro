import styles from './styles.module.scss';

type H2Props = {
  children: React.ReactNode;
};

export function H2({ children }: H2Props) {
  return <h2 className={styles.heading2}>{children}</h2>;
}
