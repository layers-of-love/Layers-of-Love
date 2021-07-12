import React, { useState } from 'react';
// components
import InstructionsModal from '../../../../components/Modal/InstructionsModal';
// styles
import styles from './CreateSection.module.css';
// assets
import shape1 from '../../../../assets/imgs/logo.png';
import shape2 from '../../../../assets/imgs/Combined-Shape.png';

export default function CreateSection() {
  const [openInstructionsModal, setOpenInstructionsModal] = useState(false);
  const [imgsOrder, setImgsOrder] = useState({});
  const [imgzI, setImgzI] = useState(0);
  const [imgsClicked, setImgsClicked] = useState([]);

  const addImg = (src, zI) => {
    imgsClicked.includes(src)
    ? setImgsClicked(imgsClicked.filter(el => el !== src))
    : setImgsClicked([...imgsClicked, src])
    setImgsOrder({...imgsOrder, [src]: zI});
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
      <div className={styles.container}>
        <h2 className={styles.instructionsTitle} onClick={() => setOpenInstructionsModal(true)}><i class="fas fa-plus-circle"/>Instructions</h2>
        <div className={styles.createContainer}>
          <div className={styles.instructions}>
            <div className={styles.imgs}>
              <img src={shape1} className={styles.imgBox} onClick={() => addImg(shape1, addzI(shape1))}/>
              <img src={shape2} className={styles.imgBox} onClick={() => addImg(shape2, addzI(shape2))}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
              <img src={shape1} className={styles.imgBox}/>
            </div>
          </div>
          <div className={styles.canvas}>
            {
              Object.entries(imgsOrder).map(([key, val]) => (
                val != -1
                ? (<img key={key} src={key} className={`zI_${val}`}/>)
                : (null)
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
