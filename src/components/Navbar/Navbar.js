import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// assets
import logo from '../../assets/imgs/logo.png';
// styles
import styles from './Navbar.module.css';

export default function Navbar({ currentPage }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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

    let extendedNav = (
      <div className={styles.extendedNav}>
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

    let mobileNav = (
      <div className={styles.mobileNavCloseContainer}>
        <div className={styles.brand}>
          <img src={logo} className={styles.logoImg}/>
        </div>
        <div className={styles.mobileNav} onClick={() => setMobileNavOpen(true)}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
    )

    let showMobileNav = (
      <div className={styles.mobileNavContainer}>
        <div className={styles.closeTag} onClick={() => setMobileNavOpen(false)}>
          <i class="fas fa-times"></i>
        </div>
        <div className={styles.mobileNavContent}>
          <div className={styles.links}>
            <Link to='/' className={homeStyle}>Make Collage</Link>
            <Link to='/gallery' className={galleryStyle}>Gallery</Link>
            <Link to='/about' className={aboutStyle}>About</Link>
          </div>
        </div>
      </div>
    )

  return (
    <div>
      { extendedNav }
      { mobileNav }
      { mobileNavOpen ? (showMobileNav) : null}
    </div>
  )
}
