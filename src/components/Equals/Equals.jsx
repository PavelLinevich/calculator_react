import React from 'react';
import commonStyles from '../../commonStyles.module.css';
import styles from './Equals.module.css';

function Equals(props) {
  const expressions = /\+|-|\/|\*| /;
  /* eslint-disable no-eval */
  return <div className={commonStyles.btn + ' ' + styles.equals} onClick={() => {
    expressions.test(props.counts[props.counts.length - 1]) ?
      props.setCounts(props.counts.slice(0, -1)) :
      props.setResult(eval(props.counts))
  }}>
    =
  </div>
}

export default Equals;