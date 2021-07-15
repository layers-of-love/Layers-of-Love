import React from 'react';
// styles
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>Layers of Love is a collaborative project by <a href='https://www.khadijaaziz.com/' className={styles.link} target='_blank'>Khadija Aziz</a> and <a href='https://www.laurakaykeeling.com/' className={styles.link} target='_blank'>Laura Kay Keeling</a>, 2021.</p>
      <p>Website is developed by <a href='https://www.linkedin.com/in/sheeza-aziz/' className={styles.link} target='_blank'>Sheeza Aziz</a>. This website is supported by <a href='https://rmg.on.ca/' className={styles.link} target='_blank'>The Robert McLaughlin Gallery</a>.</p>
    </div>
  )
}
