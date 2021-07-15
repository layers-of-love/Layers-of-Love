import React from 'react';
// styles
import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>
          Welcome to the art of collage making as a community! The process of cutting fragments from existing artworks has allowed each artist to lend specific stories, textures, and ideas to other makers. What happens when you combine these layers in different compositions? How do the meanings shift, intertwine, and generate new visual relationships?
        </p>
        <p className={styles.subtitle}>Find us on <span className={styles.link}><a href='https://www.instagram.com/explore/tags/LayersOfLoveRMG/' className={styles.link} target='_blank'>#LayersOfLoveRMG</a></span>!</p>
      </div>
    </div>
  )
}
