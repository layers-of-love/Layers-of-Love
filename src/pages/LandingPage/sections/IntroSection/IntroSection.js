import React from 'react';
// styles
import styles from './IntroSection.module.css';
// assets
import logo from '../../../../assets/imgs/logo.png';

export default function IntroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <h1 className={styles.title}>Create new Masterpieces</h1>
        <p className={styles.subtitle}>Choose art pieces from Toronto's top 10 artists to combine and create an original artpiece. Upload your masterpiece to the gallery. See what others have created.</p>
      </div>
      <img src={logo} className={styles.logoImg}/>
    </div>
  )
}
