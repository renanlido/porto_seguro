import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react';
import { FieldError } from 'react-hook-form';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: FieldError;
  label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, id, placeholder, error = null, label, ...rest },
  ref
) => (
  <div className={styles.input}>
    <h3>{label}</h3>
    <input
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      ref={ref}
      {...rest}
      style={{ border: error ? '1px solid #ff0000' : '1px solid #9a6d0c' }}
    />

    {!!error && <div className={styles.input_error}>{error.message}</div>}
  </div>
);

export const Input = forwardRef(InputBase);
