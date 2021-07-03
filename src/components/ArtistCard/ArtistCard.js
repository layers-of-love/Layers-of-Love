import React from 'react';
// assets
import logo from '../../assets/imgs/logo.png';
// styles
import styles from './ArtistCard.module.css';

export default function ArtistCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={logo}/>
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.artist}>Khadija Aziz</h2>
        <div className={styles.socialIcons}>
          <a href='' className={styles.socialIcon}>
            <i class="fas fa-link"></i>
          </a>
          <a href='' className={styles.socialIcon}>
            <i class="fab fa-instagram"></i>
          </a>
          <a href='' className={styles.socialIcon}>
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href='' className={styles.socialIcon}>
            <i class="fab fa-twitter"></i>
          </a>
          <a href='' className={styles.socialIcon}>
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href='' className={styles.socialIcon}>
            <i class="fab fa-vimeo-v"></i>
          </a>
          <a href='' className={styles.socialIcon}>
            <i class="far fa-paper-plane"></i>
          </a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia mi eros, sed vulputate sapien maximus at. Morbi vel faucibus nunc. Maecenas sit amet mattis dolor, eget feugiat diam.</p>
      </div>
    </div>
  )
}
