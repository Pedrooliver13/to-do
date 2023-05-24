// Styles
import styles from './header.module.css';

// Assets
import LogoImage from 'assets/logo-todo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={LogoImage} alt="Logo to-do" />
      <h1 className={styles.title}>
        to<span>do</span>
      </h1>
    </header>
  );
};
