import React, { useState } from 'react';
// components
import InstructionsModal from '../../../../components/Modal/InstructionsModal';
import SubmitModal from '../../../../components/Modal/SubmitModal';
// styles
import styles from './CreateSection.module.css';

export default function CreateSection() {
  // states
  const [openInstructionsModal, setOpenInstructionsModal] = useState(false);
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [imgzI, setImgzI] = useState(0);
  const [imgsClicked, setImgsClicked] = useState([]);
  // consts
  const NUMBER_OF_LAYERS = 23;

  let imgSrcs = [];
  for (let i = 1; i < NUMBER_OF_LAYERS + 1; i++) {
    imgSrcs.push(require(`../../../../assets/imgs/layers/l${i}.png`).default);
  }

  const addImg = (src, zI) => {
    imgsClicked.includes(src)
    ? setImgsClicked(imgsClicked.filter(el => el !== src))
    : setImgsClicked([...imgsClicked, src])
  }

  const addzI = (src) => {
    if (imgsClicked.includes(src)) return -1;
    setImgzI(imgzI + 1);
    return imgzI + 1;
  }

  return (
    <div className={styles.wrapper}>
      {openInstructionsModal && (
        <InstructionsModal setOpenInstructionsModal={setOpenInstructionsModal}/>
      )}
      {openSubmitModal && (
        <SubmitModal setOpenSubmitModal={setOpenSubmitModal} imgSrcs={imgsClicked}/>
      )}
      <div className={styles.container}>
        <div onClick={() => setOpenInstructionsModal(true)} className={styles.instructionsTitleContainer}>
          <i class="fas fa-plus-circle fa-2x"/>
          <h1 className={styles.instructionsTitle}>Instructions</h1>
        </div>
        <div className={styles.createContainer}>
          <div className={styles.instructions}>
            <div className={styles.imgs}>
              {
                imgSrcs.map((imgSrc) => (
                  imgsClicked.includes(imgSrc)
                  ?
                    <div className={styles.imgBoxContainer}>
                      <h1 className={styles.clickedImgBoxText}>{imgsClicked.indexOf(imgSrc) + 1}</h1>
                      <img
                        className={`${styles.imgBox} ${styles.clickedImgBox}`}
                        src={imgSrc}
                        alt={'layer created by artist'}
                        onClick={() => addImg(imgSrc, addzI(imgSrc))}
                      />
                    </div>
                  :
                    <img
                      className={styles.imgBox}
                      src={imgSrc}
                      alt={'layer created by artist'}
                      onClick={() => addImg(imgSrc, addzI(imgSrc))}
                    />
                ))
              }
            </div>
          </div>
          <div className={styles.createdContainer}>
            <div className={styles.canvas}>
              {
                imgsClicked.map((src, zIndex) => (
                  <img key={zIndex} src={src} alt={'layer created by artist'} style={{zIndex: zIndex}}/>
                ))
              }
            </div>
            <button className={styles.submitBtn} onClick={() => setOpenSubmitModal(true)}>Submit to Gallery</button>
          </div>
        </div>
      </div>
    </div>
  );
}
