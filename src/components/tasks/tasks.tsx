// Components
import { Task } from 'components';

// Icons
// import { ClipboardText as ClipboardTextIcon } from 'phosphor-react';

// Styles
import styles from './tasks.module.css';

export const Tasks = () => {
  return (
    <section className={styles.tasks}>
      <header>
        <div className={styles.blue}>
          Tarefas criadas <span className={styles.count}>0</span>
        </div>
        <div className={styles.purple}>
          Concluídas <span className={styles.count}>0</span>
        </div>
      </header>
      <div className={styles.content}>
        <Task />
      </div>
      {/* <div className={styles.emptyContent}>
        <ClipboardTextIcon size={56} />
        <div>
          <h4>Você ainda não tem tarefas cadastradas</h4>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div> */}
    </section>
  );
};
