import React from 'react';
// assets
import logo from '../../assets/imgs/logo.png';
// styles
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={logo}/>
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.title}>Untitled</h2>
        <p className={styles.artist}>By Anonymous</p>
        <div className={styles.postingInfo}>
          <p className={styles.location}>City, Country</p>
          <p className={styles.date}>Datee</p>
        </div>
      </div>
    </div>
  )
}
