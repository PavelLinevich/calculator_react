import React from 'react';
import styles from './Equals.module.css';

function Equals(props) {
  const expressions = /\+|-|\/|\*| /;
  /* eslint-disable no-eval */
  return <div className={styles.btn + ' ' + styles.equals} onClick={() => {
    expressions.test(props.counts[props.counts.length - 1]) ?
      props.setCounts(props.counts.slice(0, -1)) :
      props.setResult(eval(props.counts))
  }}>
    =
  </div>
}

export default Equals;