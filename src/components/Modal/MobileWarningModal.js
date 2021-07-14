import React, { useState } from 'react';
// styles
import styles from './Modal.module.css';

export default function MobileWarningModal() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2>Welcome to Layers of Love!</h2>
          </div>
          <div className={styles.modalInfo}>
            <p>We apologize for the inconvenience, but the <span className={styles.highlight}>Make A Collage</span> page is not available for mobiles.</p>
            <p>If you are interested in seeing other people's artworks, please visit the Gallery page.</p>
            <p>If you would like to learn more about the artists behind the project, please visit the About page.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
