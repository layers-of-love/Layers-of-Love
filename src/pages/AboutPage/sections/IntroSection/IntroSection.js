import React from 'react';
// styles
import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <h1 className={styles.title}>About Layers of Love</h1>
        <p className={styles.subtitle}>
          Layers of Love is an interactive collage-making website that was created by Khadija Aziz and Laura Kay Keeling in early 2021. Thinking about care and collaboration, Khadija and Laura created the website to engage the public in their art making and to invite artists and audiences alike to experience the power of working together with creativity and generosity.
        </p>
      </div>
    </div>
  )
}
