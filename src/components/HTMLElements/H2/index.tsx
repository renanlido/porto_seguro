import styles from './styles.module.scss';

type H2Props = {
  children: React.ReactNode;
};

// PATTERN TO H2
export function H2({ children }: H2Props) {
  return <h2 className={styles.heading2}>{children}</h2>;
}
