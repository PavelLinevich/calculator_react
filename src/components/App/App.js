import React, { useState } from 'react';
import Numbers from '../Numbers/Numbers';
import CountButton from '../CountButton/CountButton';
import styles from './App.module.css';

function App() {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');

  function applyExpression(countedNumber) {
    setCounts(countedNumber);
    setResult(eval(counts));
  }

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
          <Numbers counts={counts} onClick={setCounts} />
          <div className={styles.expressionBtn}>
            <CountButton counts={counts} setCounts={setCounts} expression={'/'} onClick={applyExpression} />
            <CountButton counts={counts} setCounts={setCounts} expression={'*'} onClick={applyExpression} />
            <CountButton counts={counts} setCounts={setCounts} expression={'-'} onClick={applyExpression} />
            <CountButton counts={counts} setCounts={setCounts} expression={'+'} onClick={applyExpression} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
