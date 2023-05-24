// Components
import { Header, TaskList } from 'components';

// Styles
import styles from 'app.module.css';
import './global.css';

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <TaskList />
        </main>
      </div>
    </>
  );
};

export default App;
