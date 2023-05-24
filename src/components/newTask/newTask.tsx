// Components
import { Input } from 'components';

// Icons
import { PlusCircle as PlusCircleIcon } from 'phosphor-react';

// Styles
import styles from './newTask.module.css';

export const NewTask = () => {
  return (
    <form className={styles.newTask}>
      <Input placeholder="Adicionar uma tarefa" />
      <button type="submit" className={styles.button}>
        Criar <PlusCircleIcon size={20} />
      </button>
    </form>
  );
};
