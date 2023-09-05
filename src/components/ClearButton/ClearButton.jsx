import React from 'react';
import commonStyles from '../../commonStyles.module.css';
import styles from './ClearButton.module.css';

function ClearButton() {
  return (
    <div className={styles.clearButtonContainer}>
      <div className={commonStyles.btn + ' ' + styles.clearButton}>
        AC
      </div>
      <div className={commonStyles.btn + ' ' + styles.clearButton}>
      ←
      </div>
    </div>
  )
}

export default ClearButton;