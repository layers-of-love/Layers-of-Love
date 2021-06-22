import React, { useState } from 'react';
// components
import InstructionsModal from '../../../../components/Modal/InstructionsModal';
// styles
import styles from './CreateSection.module.css';

export default function CreateSection() {
  const [openInstructionsModal, setOpenInstructionsModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      {openInstructionsModal && (
        <InstructionsModal setOpenInstructionsModal={setOpenInstructionsModal}/>
      )}
      <div className={styles.container}>
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
          <div className={styles.canvas}>
          </div>
        </div>
      </div>
    </div>
  )
}
