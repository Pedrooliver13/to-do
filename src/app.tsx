// Components
import { Header, NewTask, Tasks } from 'components';

// Styles
import styles from 'app.module.css';
import './global.css';

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTask />
        <main>
          <Tasks />
        </main>
      </div>
    </>
  );
};

export default App;
