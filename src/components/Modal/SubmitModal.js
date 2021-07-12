import React, { useState } from 'react';
// contexts
import { useGalleryArtwork } from '../../contexts/GalleryArtworkContext';
// styles
import styles from './Modal.module.css';

export default function SubmitModal({ setOpenSubmitModal, imgSrcs }) {
  // contexts
  const { handleSubmitPiece, setTitle, setArtist, setLocation, setImgsPath } = useGalleryArtwork();
  setImgsPath(imgSrcs);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2>Submit to Gallery</h2>
            <i class="fas fa-times" onClick={() => setOpenSubmitModal(false)}/>
          </div>
          <div className={styles.modalInfo}>
            <p>The information you submit will be made public, and everything<br/>is optional.</p>
            <form onSubmit={handleSubmitPiece}>
              <div className={styles.formGroup}>
                <label for='title'>Title of your digital collage:</label>
                <input
                  onChange={e => setTitle(e.target.value)}
                  id='title'
                  type='text'
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label for='artist'>Your name, Instagram handle:</label>
                <input
                  onChange={e => setArtist(e.target.value)}
                  id='artist'
                  type='text'
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label for='location'>City, Province/State:</label>
                <input
                  onChange={e => setLocation(e.target.value)}
                  id='location'
                  type='text'
                  className={styles.inputField}
                />
              </div>
              <button className={styles.submitBtn}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
