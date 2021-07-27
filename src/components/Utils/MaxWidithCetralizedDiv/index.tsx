import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface MaxWidthCentralizedDivProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MaxWidthCentralizedDiv({
  children,
  ...rest
}: MaxWidthCentralizedDivProps) {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}
