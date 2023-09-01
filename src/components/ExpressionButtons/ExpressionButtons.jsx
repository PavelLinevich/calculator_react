import React from 'react';
import CountButton from '../CountButton/CountButton';
import styles from './ExpressionButtons.module.css'

function ExpressionButtons(props) {


  function applyExpression(countedNumber) {
    props.setCounts(countedNumber);
    /* eslint-disable no-eval */
    props.setResult(eval(props.counts));
  }

  return (
    <div className={styles.expressionBtn}>
      <CountButton counts={props.counts} setCounts={props.setCounts} expression={'/'} onClick={applyExpression} />
      <CountButton counts={props.counts} setCounts={props.setCounts} expression={'*'} onClick={applyExpression} />
      <CountButton counts={props.counts} setCounts={props.setCounts} expression={'-'} onClick={applyExpression} />
      <CountButton counts={props.counts} setCounts={props.setCounts} expression={'+'} onClick={applyExpression} />
    </div>
  )
}

export default ExpressionButtons