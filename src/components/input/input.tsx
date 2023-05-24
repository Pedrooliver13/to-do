// Packages
import { InputHTMLAttributes } from 'react';

// Styles
import styles from './input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <input className={styles.input} {...props} />;
};
