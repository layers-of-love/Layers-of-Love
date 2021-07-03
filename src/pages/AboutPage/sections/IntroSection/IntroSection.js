import React from 'react';
// styles
import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.subtitle}>Layers of Love is an initiative by hjbgdnfk blah blah.</p>
      </div>
    </div>
  )
}
