import React, { useContext, createContext, useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);

  const getGalleryPieces = () => {
    db.collection('artwork').onSnapshot((snapshot) => {
      let artworks = [];
      snapshot.forEach(doc => {
        let artwork = {
          id: doc.id,
          artist: doc.data().artist,
          title: doc.data().title,
          location: doc.data().location,
          date: doc.data().date,
          imgSrcs: doc.data().imgSrcs,
        };
        artworks.push(artwork);
      })
      setGalleryPieces(artworks);
    })
  }

  const handleSubmitPiece = (evt) => {
    evt.preventDefault();
    let currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
    db.collection('artwork').add({
      artist: artist,
      title: title,
      location: location,
      date: currentDate,
      imgSrcs: imgsPath,
    });
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
