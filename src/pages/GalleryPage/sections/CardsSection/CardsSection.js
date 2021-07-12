import React from 'react';
// contexts
import { useGalleryArtwork } from '../../../../contexts/GalleryArtworkContext';
// components
import Card from '../../../../components/Card/Card';
// styles
import styles from './CardsSection.module.css';

export default function CardsSection() {
  // contexts
  const { galleryPieces } = useGalleryArtwork();
  
  return (
    <div className={styles.container}>
      <Card/><Card/><Card/><Card/><Card/><Card/>
    </div>
  )
}
