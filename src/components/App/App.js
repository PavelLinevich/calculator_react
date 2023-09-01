import React, { useState } from 'react';
import Numbers from '../Numbers/Numbers';
import styles from './App.module.css';

function App() {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.keyboard}>
        <div className={styles.screen}>
          <div className={styles.counts}>
            {counts}
          </div>
          <div className={styles.result}>
            {result === '' ? 0 : `= ${result}`}
          </div>
        </div>
        <Numbers />
      </div>
    </div>
  );
}

export default App;
