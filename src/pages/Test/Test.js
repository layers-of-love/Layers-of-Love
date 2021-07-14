import React, { useState } from 'react';
// components
import InstructionsModal from '../../components/Modal/InstructionsModal';
import SubmitModal from '../../components/Modal/SubmitModal';
// styles
import styles from './Test.module.css';
// assets
import logo from '../../assets/imgs/Jun 2021 Layers of Love LOGO _ Khadija Aziz and Laura Kay Keeling.png';

export default function Test() {
  // states
  const [openInstructionsModal, setOpenInstructionsModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container1}>
        <div className={styles.introText}>
          <h1 className={styles.title}>Make a Collage</h1>
          <p className={styles.subtitle}>
            Welcome to Layers of Love! Create your own digital collage using fragments from existing artworks by five Canadian artists. What happens when you combine these layers in different compositions? How do the meanings shift, intertwine, and generate new visual relationships? Submit your finished collage to the Gallery and see what others have created!
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={logo} className={styles.logoImg}/>
        </div>
      </div>

      <div className={styles.container2}>
          {openInstructionsModal && (
            <InstructionsModal setOpenInstructionsModal={setOpenInstructionsModal}/>
          )}
          <div className={styles.container3}>
            <h2 className={styles.instructionsTitle} onClick={() => setOpenInstructionsModal(true)}><i class="fas fa-plus-circle"/>Instructions</h2>
            <div className={styles.createContainer}>
              <div className={styles.instructions}>
                <div className={styles.imgs}>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                  <div className={styles.imgBox}></div>
                </div>
              </div>
              <div className={styles.createdContainer}>
                <div className={styles.canvas}>
                </div>
                <button className={styles.submitBtn}>Submit to Gallery</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
