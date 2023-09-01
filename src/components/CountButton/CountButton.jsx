import React from 'react';
import styles from './CountButton.module.css';

function CountButton(props) {
  const expressions = /\+|-|\/|\*| /;//  /\+|\-|\/|\*| /
  const lastNumber = props.counts[props.counts.length - 1];

  function checkExpressionType() {
    expressions.test(lastNumber) ?
      props.setCounts(props.counts.slice(0, -1) + props.expression) :
      props.onClick(props.counts + props.expression)
  }
  return (
    <div className={styles.btn} onClick={() => { checkExpressionType() }}>{props.expression}</div>
  )
}

export default CountButton;