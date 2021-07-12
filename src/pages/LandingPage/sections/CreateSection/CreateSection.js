import React, { useState } from 'react';
// components
import InstructionsModal from '../../../../components/Modal/InstructionsModal';
import SubmitModal from '../../../../components/Modal/SubmitModal';
// styles
import styles from './CreateSection.module.css';
// assets (layers)
import l1 from '../../../../assets/imgs/layers/l1.png';
import l2 from '../../../../assets/imgs/layers/l2.png';
import l3 from '../../../../assets/imgs/layers/l3.png';
import l4 from '../../../../assets/imgs/layers/l4.png';
import l5 from '../../../../assets/imgs/layers/l5.png';
import l6 from '../../../../assets/imgs/layers/l6.png';
import l7 from '../../../../assets/imgs/layers/l7.png';
import l8 from '../../../../assets/imgs/layers/l8.png';
import l9 from '../../../../assets/imgs/layers/l9.png';
import l10 from '../../../../assets/imgs/layers/l10.png';
import l11 from '../../../../assets/imgs/layers/l11.png';
import l12 from '../../../../assets/imgs/layers/l12.png';
import l13 from '../../../../assets/imgs/layers/l13.png';
import l14 from '../../../../assets/imgs/layers/l14.png';
import l15 from '../../../../assets/imgs/layers/l15.png';
import l16 from '../../../../assets/imgs/layers/l16.png';
import l17 from '../../../../assets/imgs/layers/l17.png';
import l18 from '../../../../assets/imgs/layers/l18.png';
import l19 from '../../../../assets/imgs/layers/l19.png';
import l20 from '../../../../assets/imgs/layers/l20.png';
import l21 from '../../../../assets/imgs/layers/l21.png';
import l22 from '../../../../assets/imgs/layers/l22.png';
import l23 from '../../../../assets/imgs/layers/l23.png';

export default function CreateSection() {
  const [openInstructionsModal, setOpenInstructionsModal] = useState(false);
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [imgzI, setImgzI] = useState(0);
  const [imgsClicked, setImgsClicked] = useState([]);

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

  // we have to do things this ugly way bc `l${i}` just converts this into a str when we want an obj :(
  let imgSrcs = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21, l22, l23];

  return (
    <div className={styles.wrapper}>
      {openInstructionsModal && (
        <InstructionsModal setOpenInstructionsModal={setOpenInstructionsModal}/>
      )}
      {openSubmitModal && (
        <SubmitModal setOpenSubmitModal={setOpenSubmitModal}/>
      )}
      <div className={styles.container}>
        <h2 className={styles.instructionsTitle} onClick={() => setOpenInstructionsModal(true)}><i class="fas fa-plus-circle"/>Instructions</h2>
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
                        onClick={() => addImg(imgSrc, addzI(imgSrc))}
                      />
                    </div>
                  :
                    <img
                      className={styles.imgBox}
                      src={imgSrc}
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
                  <img key={zIndex} src={src} style={{zIndex: zIndex}}/>
                ))
              }
            </div>
            <button className={styles.submitBtn} onClick={() => setOpenSubmitModal(true)}>Submit to Gallery</button>
          </div>
        </div>
      </div>
    </div>
  )
}
