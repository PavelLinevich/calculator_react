import React from 'react';
import styles from './Numbers.module.css';

function Numbers(props) {
  const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0,]

  const numbers = buttons.map(
    number => {
      return (
        <div
          onClick={(e) => {
            props.counts !== '0' ?
              props.onClick(props.counts + e.target.innerHTML) :
              props.onClick(e.target.innerHTML)
          }}
          className={styles.btn}
          key={number}>
          {number}
        </div>
      )
    }
  )

  return (
    <div className={styles.btnBlock}>{numbers}</div>
  )
}

export default Numbers;