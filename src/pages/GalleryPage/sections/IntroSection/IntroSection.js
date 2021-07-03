import React from 'react';
// styles
import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>Welcome to the community gallery. Here, you can see the designs created by fellow artists around the globe who have all used the same patterns that you had used. Look around, can you spot any masterpieces that are almost/completely identical to yours?!</p>
      </div>
    </div>
  )
}
