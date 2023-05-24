// Packages
import { useState } from 'react';

// Components
import { Task, NewTask } from 'components';

// Icons
import { ClipboardText as ClipboardTextIcon } from 'phosphor-react';

// Styles
import styles from './taskList.module.css';

interface TaskType {
  id: string;
  content: string;
}

export const TaskList = () => {
  const [taskList, setTaskList] = useState<Array<TaskType>>([]);
  const [checkCount, setCheckCount] = useState(0);
  const totalTasks = taskList.length;
  const totalCheckedLabel =
    totalTasks > 0 ? `${checkCount} de ${totalTasks}` : checkCount;

  const addTask = (content: TaskType): void => {
    setTaskList((state) => [...state, content]);
  };

  const deleteTask = (id: string) => {
    const listTaskWithoutDeleteOne = taskList.filter((task) => task.id !== id);
    setTaskList(listTaskWithoutDeleteOne);
  };

  const sumTotalChecked = (isChecked: boolean) => {
    if (!isChecked) {
      return setCheckCount((state) => state - 1);
    }

    return setCheckCount((state) => state + 1);
  };

  return (
    <>
      <NewTask onAddTask={addTask} />
      <section className={styles.tasks}>
        <header>
          <div className={styles.blue}>
            Tarefas criadas <span className={styles.count}>{totalTasks}</span>
          </div>
          <div className={styles.purple}>
            Concluídas <span className={styles.count}>{totalCheckedLabel}</span>
          </div>
        </header>
        <div className={styles.content}>
          {taskList.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={deleteTask}
              onSumTotalChecked={sumTotalChecked}
            />
          ))}
        </div>
        {taskList.length === 0 && (
          <div className={styles.emptyContent}>
            <ClipboardTextIcon size={56} />
            <div>
              <h4>Você ainda não tem tarefas cadastradas</h4>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
