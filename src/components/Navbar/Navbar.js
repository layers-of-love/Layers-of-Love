import React from 'react';
import { Link } from 'react-router-dom';
// assets
import logo from '../../assets/imgs/logo.png';
// styles
import styles from './Navbar.module.css';

export default function Navbar({ currentPage }) {
  let homeStyle, galleryStyle, aboutStyle;

  currentPage == 'home'
    ? homeStyle = `${styles.link} ${styles.currentLink}`
    : homeStyle = `${styles.link}`;
  currentPage == 'gallery'
    ? galleryStyle = `${styles.link} ${styles.currentLink}`
    : galleryStyle = `${styles.link}`;
  currentPage == 'about'
    ? aboutStyle = `${styles.link} ${styles.currentLink}`
    : aboutStyle = `${styles.link}`;


  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <img src={logo} className={styles.logoImg}/>
        <h2 className={styles.title}>Layers of Love</h2>
      </div>
      <div className={styles.links}>
        <Link to='/' className={homeStyle}>Make Collage</Link>
        <Link to='/gallery' className={galleryStyle}>Gallery</Link>
        <Link to='/about' className={aboutStyle}>About</Link>
      </div>
    </div>
  )
}
