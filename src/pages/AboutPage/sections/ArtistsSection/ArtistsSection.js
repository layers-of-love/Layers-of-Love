import React from 'react';
// components
import ArtistCard from '../../../../components/ArtistCard/ArtistCard';
// styles
import styles from './ArtistsSection.module.css';

export default function ArtistsSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Founding Artists</h2>
      <div className={styles.founders}>
        <ArtistCard/>
        <ArtistCard/>
      </div>
      <h2 className={styles.title}>Featured Artists</h2>
      <div className={styles.featured}>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
      </div>
    </div>
  )
}
