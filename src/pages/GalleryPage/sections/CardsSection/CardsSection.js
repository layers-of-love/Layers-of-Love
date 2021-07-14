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
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {galleryPieces.map((piece) => (
          <Card
            title={piece.title}
            artist={piece.artist}
            location={piece.location}
            pieceNumber={piece.pieceNumber}
            date={(new Date(piece.date)).toString().split(' ').splice(1,3).join(' ')}
            imgSrcs={piece.imgSrcs}
          />
        ))}
      </div>
    </div>
  );
}
