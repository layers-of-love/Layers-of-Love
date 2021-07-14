import React from 'react';
import Card from '../../components/Card/Card';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import styles from './Test.module.css';

export default function Test() {
  return (
    <div className={styles.container1}>
      <Navbar currentPage={'gallery'}/>
      <div className={styles.container2}>
        <div className={styles.introText}>
          <h1 className={styles.title}>Gallery</h1>
          <p className={styles.subtitle}>
            Welcome to the art of collage making as a community! The process of cutting fragments from existing artworks has allowed each artist to lend specific stories, textures, and ideas to other makers. What happens when you combine these layers in different compositions? How do the meanings shift, intertwine, and generate new visual relationships?
          </p>
          <p className={styles.subtitle}>Find us on <a href='https://www.instagram.com/explore/tags/LayersOfLoveRMG/' className={styles.link}>#LayersOfLoveRMG</a>!</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.container3}>
          <Card
            title={''}
            artist={''}
            location={''}
            pieceNumber={''}
            date={''}
            imgSrcs={['']}
          />
          <Card
            title={''}
            artist={''}
            location={''}
            pieceNumber={''}
            date={''}
            imgSrcs={['']}
          />
          <Card
            title={''}
            artist={''}
            location={''}
            pieceNumber={''}
            date={''}
            imgSrcs={['']}
          />
          <Card
            title={''}
            artist={''}
            location={''}
            pieceNumber={''}
            date={''}
            imgSrcs={['']}
          />
          <Card
            title={''}
            artist={''}
            location={''}
            pieceNumber={''}
            date={''}
            imgSrcs={['']}
          />
          <Card
            title={''}
            artist={''}
            location={''}
            pieceNumber={''}
            date={''}
            imgSrcs={['']}
          />
          <Card
            title={''}
            artist={''}
            location={''}
            pieceNumber={''}
            date={''}
            imgSrcs={['']}
          />
          <Card
            title={''}
            artist={''}
            location={''}
            pieceNumber={''}
            date={''}
            imgSrcs={['']}
          />
        </div>
      </div>

      <div className={styles.container4}>
        <p>Layers of Love is a collaborative project by <a href='https://www.khadijaaziz.com/' className={styles.link}>Khadija Aziz</a> and <a href='https://www.laurakaykeeling.com/' className={styles.link}>Laura Kay Keeling</a>, 2021.</p>
        <p>Website is developed by <a href='https://www.linkedin.com/in/sheeza-aziz/' className={styles.link}>Sheeza Aziz</a>. This website is supported by <a href='https://rmg.on.ca/' className={styles.link}>The Robert McLaughlin Gallery</a>.</p>
      </div>
    </div>
  )
}
