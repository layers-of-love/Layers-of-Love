import React from 'react';
import { Link } from 'react-router-dom';
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
              <li>Continue selecting the Layers in the order that you wish to see them, choosing as few or as many as you like.</li>
              <li>To remove an image from your Canvas, unclick the Layer thumbnail.</li>
              <li>When you are happy with your digital collage, click “Submit” to add your layer to our <Link to='/gallery' className={styles.link}>Gallery</Link>!</li>
              <li>Take a screenshot of your collage to show it off on your social media! Please use the hashtag #LayersOfLoveRMG so that it can automatically be included on The Robert McLaughlin Gallery’s Layers of Love virtual gallery!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
