import React, { useContext, createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { firebase, db } from '../firebase/index';

const GalleryArtworkContext = createContext();

export function useGalleryArtwork() {
  return useContext(GalleryArtworkContext);
}

export function GalleryArtworkProvider({ children }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [location, setLocation] = useState('');
  const [imgsPath, setImgsPath] = useState([]);
  const [galleryPieces, setGalleryPieces] = useState([]);
  const [pieceNumber, setPieceNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const getGalleryPieces = () => {
    db.collection('artwork').onSnapshot((snapshot) => {
      let artworks = [];
      snapshot.forEach(doc => {
        let artwork = {
          id: doc.id,
          artist: doc.data().artist,
          title: doc.data().title,
          location: doc.data().location,
          pieceNumber: doc.data().pieceNumber,
          date: doc.data().date,
          imgSrcs: doc.data().imgSrcs,
        };
        artworks.push(artwork);
      })
      artworks.sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0));
      setGalleryPieces(artworks);
      if (artworks.length > 0) {
        setPieceNumber(artworks[0].pieceNumber + 1);
      }
    });
  }

  const handleSubmitPiece = (evt) => {
    evt.preventDefault();
    let timestamp = Date.now();
    db.collection('artwork').add({
      artist: artist,
      title: title,
      location: location,
      date: timestamp,
      pieceNumber: pieceNumber,
      imgSrcs: imgsPath,
    });
    setPieceNumber(pieceNumber + 1);
    history.push('/gallery');
  }

  useEffect(() => {
    getGalleryPieces();
    setLoading(false);
  }, []);

  const value = {
    galleryPieces,
    setTitle,
    setArtist,
    setLocation,
    setImgsPath,
    handleSubmitPiece,
  }

  return (
    <GalleryArtworkContext.Provider value={value}>
      {!loading && children}
    </GalleryArtworkContext.Provider>
  )
}
