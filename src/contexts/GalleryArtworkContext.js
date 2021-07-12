import React, { useContext, createContext, useState, useEffect } from 'react';
import { db } from '../firebase/index';

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

  const getGalleryPieces = () => {
    db.collection('artwork').onSnapshot((snapshot) => {
      let artworks = [];
      snapshot.forEach(doc => {
        let artwork = {
          id: doc.id,
          artist: doc.data().artist,
          title: doc.data().title,
          location: doc.data().location,
          imgSrcs: doc.data().imgSrcs,
        };
        artworks.push(artwork);
      })
      setGalleryPieces(artworks);
    })
  }

  useEffect(() => {
    getGalleryPieces();
  }, []);

  const value = {
    galleryPieces,
  }

  return (
    <GalleryArtworkContext.Provider value={value}>
      {children}
    </GalleryArtworkContext.Provider>
  )
}
