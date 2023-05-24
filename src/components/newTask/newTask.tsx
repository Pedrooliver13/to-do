// Packages
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  ReactElement,
  useState,
} from 'react';

// Components
import { Input } from 'components';

// Icons
import { PlusCircle as PlusCircleIcon } from 'phosphor-react';

// Styles
import styles from './newTask.module.css';

interface NewTaskProps {
  onAddTask: (content: { id: string; content: string }) => void;
}

export const NewTask = ({ onAddTask }: NewTaskProps): ReactElement => {
  const [descriptionValue, setDescriptionValue] = useState('');
  const isDescriptionValueEmpty = descriptionValue.length === 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onAddTask({ id: String(Math.random()), content: descriptionValue });
    setDescriptionValue('');
  };

  const handleDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    event.target.setCustomValidity('');
    setDescriptionValue(event.target.value);
  };

  const handleDescriptionInvalid = (
    event: InvalidEvent<HTMLInputElement>
  ): void => {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newTask}>
      <Input
        id="description"
        name="description"
        placeholder="Adicionar uma tarefa"
        value={descriptionValue}
        onChange={handleDescriptionChange}
        onInvalid={handleDescriptionInvalid}
        required
      />
      <button
        type="submit"
        className={styles.button}
        disabled={isDescriptionValueEmpty}
      >
        Criar <PlusCircleIcon size={20} />
      </button>
    </form>
  );
};
