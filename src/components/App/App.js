import React, { useState } from 'react';
import Numbers from '../Numbers/Numbers';
import ExpressionButtons from '../ExpressionButtons/ExpressionButtons';
import ClearButton from '../ClearButton/ClearButton';
import styles from './App.module.css';

function App() {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.screen}>
          <div className={styles.counts}>
            {counts}
          </div>
          <div className={styles.result}>
            {result === '' ? 0 : `= ${result}`}
          </div>
        </div>
        <div className={styles.keyboard}>
          <ClearButton />
          <div className={styles.keyboardContainer}>
            <Numbers counts={counts} setCounts={setCounts} setResult={setResult} />
            <ExpressionButtons counts={counts} setCounts={setCounts} setResult={setResult} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
