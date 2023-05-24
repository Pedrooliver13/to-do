// Packages
import { useState } from 'react';

// Icons
import { Trash as TrashIcon, Check as CheckIcon } from 'phosphor-react';

// Styles
import styles from './task.module.css';

export const Task = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckClick = () => {
    setChecked((state) => !state);
  };

  return (
    <label htmlFor="check">
      <div className={styles.task}>
        <div className={styles.check}>
          <input
            type="checkbox"
            id="check"
            name="check"
            onClick={handleCheckClick}
          />
          <label htmlFor="check" className={styles.labelCheck}>
            <CheckIcon />
          </label>
        </div>
        <div className={checked ? styles.contentChecked : styles.content}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </div>
        <button className={styles.delete}>
          <TrashIcon size={20} />
        </button>
      </div>
    </label>
  );
};
