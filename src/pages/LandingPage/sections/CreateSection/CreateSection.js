import React from 'react';
// styles
import styles from './CreateSection.module.css';

export default function CreateSection() {
  return (
    <div className={styles.container}>
      <div className={styles.instructions}>
        <h2 className={styles.instructionsTitle}><i class="fas fa-plus-circle"></i> Instructions</h2>
        <div className={styles.imgs}>

        </div>
      </div>
      <div className={styles.canvas}>

      </div>
    </div>
  )
}
