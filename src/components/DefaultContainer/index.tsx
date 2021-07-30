import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <div className={styles.default_container} {...rest}>
      <div className={styles.default_content}>{children}</div>
    </div>
  );
}
