import React from 'react';
import commonStyles from '../../commonStyles.module.css';
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
    <div className={commonStyles.btn + ' ' + styles.expression} onClick={() => { checkExpressionType() }}>{props.expression}</div>
  )
}

export default CountButton;