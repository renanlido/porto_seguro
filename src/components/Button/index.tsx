import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// PATTERN TO BUTTON
export function Button({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={styles.button_container} {...rest}>
      {children}
    </button>
  );
}
