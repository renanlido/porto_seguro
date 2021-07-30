import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

// DEFAULT CONTAINER TO LIMIT THE SITE OR APLICATION

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <article className={styles.default_container} {...rest}>
      <section className={styles.default_content}>{children}</section>
    </article>
  );
}
