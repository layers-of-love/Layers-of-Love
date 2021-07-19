import React, { useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
// styles
import styles from './Card.module.css';

export default function Card({ title, artist, location, date, pieceNumber, imgSrcs }) {
  const componentRef = useRef();

  return (
    <div className={styles.container} ref={componentRef}>
      <div className={styles.imgContainer}>
        {imgSrcs.map((src, zIndex) => (
            <img key={zIndex} src={src} style={{zIndex: zIndex}} alt={'layer created by artist'}/>
        ))}
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title ? title : 'Untitled'}</h2>
          <div className={styles.tooltip}>
            <i className='fas fa-arrow-down' onClick={() => exportComponentAsPNG(componentRef, 'community collage')}/>
            <span className={styles.tooltiptext}>Download</span>
          </div>
        </div>
        <p className={styles.artist}>By {artist ? artist : 'Anonymous'}</p>
        <div className={styles.postingInfo}>
          <p className={styles.location}>{location ? location : 'Somewhere, Earth'}</p>
          <p className={styles.date}>{date ? `${date} - No. ${pieceNumber}`  : 'Sometime'}</p>
        </div>
      </div>
    </div>
  )
}
