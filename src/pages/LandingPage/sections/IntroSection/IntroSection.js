import React from 'react';
// styles
import styles from './IntroSection.module.css';
// assets
// import logo from '../../../../assets/imgs/logo.png';
import logo from '../../../../assets/imgs/Jun 2021 Layers of Love LOGO _ Khadija Aziz and Laura Kay Keeling.png';

export default function IntroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <h1 className={styles.title}>Make a Collage</h1>
        <p className={styles.subtitle}>
          Welcome to Layers of Love! Create your own digital collage using fragments from existing artworks by five Canadian artists. What happens when you combine these layers in different compositions? How do the meanings shift, intertwine, and generate new visual relationships? Submit your finished collage to the Gallery and see what others have created!
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img src={logo} alt={'website logo'} className={styles.logoImg}/>
      </div>
    </div>
  )
}
