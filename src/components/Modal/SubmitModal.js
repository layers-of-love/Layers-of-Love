import React from 'react';
// styles
import styles from './Modal.module.css';

export default function SubmitModal({ setOpenSubmitModal }) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2>Submit to Gallery</h2>
            <i class="fas fa-times" onClick={() => setOpenSubmitModal(false)}/>
          </div>
          <div className={styles.modalInfo}>
            <p>The information you submit will be made public, and everything is optional.</p>
            <form>
              <div className={styles.formGroup}>
                <label for='title'>Title of your digital collage:</label>
                <input id='title' type='text' className={styles.inputField}/>
              </div>
              <div className={styles.formGroup}>
                <label for='artist'>Your name, Instagram handle:</label>
                <input id='artist' type='text' className={styles.inputField}/>
              </div>
              <div className={styles.formGroup}>
                <label for='location'>City, Province/State:</label>
                <input id='location' type='text' className={styles.inputField}/>
              </div>
              <button className={styles.submitBtn}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
