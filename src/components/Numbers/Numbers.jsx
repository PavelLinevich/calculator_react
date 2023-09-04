import React from 'react';
import Equals from '../Equals/Equals';
import commonStyles from '../../commonStyles.module.css';
import styles from './Numbers.module.css';

function Numbers(props) {
  const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0]

  const numbers = buttons.map(
    number => {
      return (
        <div
          onClick={(e) => {
            props.counts !== '0' ?
              props.setCounts(props.counts + e.target.innerHTML) :
              props.setCounts(e.target.innerHTML)
          }}
          className={commonStyles.btn}
          key={number}>
          {number}
        </div>
      )
    }
  )

  return (
    <div>
      <div className={styles.btnBlock}>{numbers}
        <Equals counts={props.counts} setCounts={props.setCounts} setResult={props.setResult} />
      </div>
    </div>
  )
}

export default Numbers;