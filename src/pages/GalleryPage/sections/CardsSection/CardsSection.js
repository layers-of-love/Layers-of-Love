import React from 'react';
// contexts
import { useGalleryArtwork } from '../../../../contexts/GalleryArtworkContext';
// components
import Card from '../../../../components/Card/Card';
import LoadingIcon from '../../../../components/LoadingIcon/LoadingIcon';
// styles
import styles from './CardsSection.module.css';

export default function CardsSection() {
  // contexts
  const { galleryPieces, loading } = useGalleryArtwork();

  return (
    <div className={styles.container}>
      { loading
        ? <LoadingIcon/>
        : galleryPieces.map((piece) => (
            <Card
              title={piece.title}
              artist={piece.artist}
              location={piece.location}
              pieceNumber={piece.pieceNumber}
              date={(new Date(piece.date)).toString().split(' ').splice(1,3).join(' ')}
              imgSrcs={piece.imgSrcs}
            />
          ))
      }
    </div>
  );
}
