import React from 'react';
// styles
import styles from './Modal.module.css';

export default function InstructionsModal({ setOpenInstructionsModal }) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2>Instructions</h2>
            <i class="fas fa-times" onClick={() => setOpenInstructionsModal(false)}/>
          </div>
          <div className={styles.modalInfo}>
            <ol>
              <li>Select an image by clicking one of the thumbnail icons from Layers. This will bring the image to your Canvas.</li>
              <li>Continue selecting the Layers in the order that you wish to see them, choosing as few or as many as you like. The first image selected will become your background.</li>
              <li>To remove an image from your canvas, unclick the Layer.</li>
              <li>When you are happy with your digital collage, show it off on social media by clicking one (or all) of the icons below your Canvas.</li>
              <li>Please also click “Submit”, so you can directly share your art and comments with artists Khadija Aziz and Laura Kay Keeling.</li>
              <li>When sharing your collage on social media, please tag us so we can enjoy and share your Layers of Love digital collage! <a href='' className={styles.link}>@_khadija_a_</a> <a href='' className={styles.link}>@laurakaykeeling</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
