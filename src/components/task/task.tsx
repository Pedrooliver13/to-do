// Packages
import { useState } from 'react';

// Icons
import { Trash as TrashIcon, Check as CheckIcon } from 'phosphor-react';

// Styles
import styles from './task.module.css';

interface TaskProps {
  task: {
    id: string;
    content: string;
  };
  onDeleteTask: (id: string) => void;
  onSumTotalChecked: (isChecked: boolean) => void;
}

export const Task = ({ task, onDeleteTask, onSumTotalChecked }: TaskProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckClick = () => {
    onSumTotalChecked(!checked);
    setChecked((state) => !state);
  };

  const handleDeleteTaskClick = () => {
    if (checked) {
      onSumTotalChecked(!checked);
    }

    onDeleteTask(task.id);
  };

  return (
    <div className={styles.task}>
      <div className={styles.check}>
        <input
          id={task.id}
          name={task.id}
          type="checkbox"
          onClick={handleCheckClick}
        />
        <label htmlFor={task.id} className={styles.labelCheck}>
          <CheckIcon />
        </label>
      </div>
      <div className={checked ? styles.contentChecked : styles.content}>
        <label htmlFor={task.id}>{task.content}</label>
      </div>
      <button onClick={handleDeleteTaskClick} className={styles.delete}>
        <TrashIcon size={20} />
      </button>
    </div>
  );
};
