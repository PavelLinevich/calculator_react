// import logo from './logo.svg';
import Numbers from '../Numbers/Numbers';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.keyboard}>
        <Numbers />
      </div>
    </div>
  );
}

export default App;
