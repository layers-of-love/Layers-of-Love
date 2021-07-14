import React from 'react';
// assets
import logo from '../../assets/imgs/logo.png';
// styles
import styles from './Card.module.css';

export default function Card({ title, artist, location, date, pieceNumber, imgSrcs }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {imgSrcs.map((src, zIndex) => (
            <img key={zIndex} src={src} style={{zIndex: zIndex}}/>
        ))}
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.title}>{title ? title : 'Untitled'}</h2>
        <p className={styles.artist}>By {artist ? artist : 'Anonymous'}</p>
        <div className={styles.postingInfo}>
          <p className={styles.location}>{location ? location : 'Somewhere, Earth'}</p>
          <p className={styles.date}>{date ? `${date} - No. ${pieceNumber}`  : 'Sometime'}</p>
        </div>
      </div>
    </div>
  )
}
