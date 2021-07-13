import React from 'react';
// assets
import logo from '../../assets/imgs/logo.png';
// styles
import styles from './ArtistCard.module.css';

export default function ArtistCard({ imgSrc, artist, bio, siteLink, igLink, emailAddress }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={imgSrc}/>
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.artist}>{artist}</h2>
        <div className={styles.socialIcons}>
          <a href={siteLink} className={styles.socialIcon}>
            <i class="fas fa-link"></i>
          </a>
          <a href={igLink} className={styles.socialIcon}>
            <i class="fab fa-instagram"></i>
          </a>
          <a href={`mailto:${emailAddress}`} className={styles.socialIcon}>
            <i class="far fa-envelope"></i>
          </a>
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  )
}
