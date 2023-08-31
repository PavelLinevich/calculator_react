import React from 'react';
import styles from './Numbers.module.css';

function Numbers(props) {
  const numbers = Array.from(Array(10).keys()).map(
    number => {
      return <div className={styles.btn} key={number}>{number}</div>
    }
  )

  return (
    <div className={styles.btnBlock}>{numbers}</div>
  )
}

export default Numbers;