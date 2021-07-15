import React from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';
// styles
import styles from './ArtistCard.module.css';

export default function ArtistCard({ imgSrc, artist, bio, siteLink, igLink, emailAddress }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={imgSrc} alt={'artist headshot'}/>
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.artist}>{artist}</h2>
        <div className={styles.socialIcons}>
          <a href={siteLink} className={styles.socialIcon} target='_blank' rel='noreferrer'>
            <i class="fas fa-link"></i>
          </a>
          <a href={igLink} className={styles.socialIcon} target='_blank' rel='noreferrer'>
            <i class="fab fa-instagram"></i>
          </a>
          <a href={`mailto:${emailAddress}`} className={styles.socialIcon} target='_blank' rel='noreferrer'>
            <i class="far fa-envelope"></i>
          </a>
        </div>
        <p className={styles.bio}>
        </p>
        <ReactReadMoreReadLess
              charLimit={350}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName={styles.link}
              readLessClassName={styles.link}
          >
              {bio}
        </ReactReadMoreReadLess>
      </div>
    </div>
  );
}
