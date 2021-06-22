import React from 'react';
import { Link } from 'react-router-dom';
// assets
import logo from '../../assets/imgs/logo.png';
// styles
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <img src={logo} className={styles.logoImg}/>
        <h2 className={styles.title}>Layers of Love</h2>
      </div>
      <div className={styles.links}>
        <Link to='/' className={`${styles.link} ${styles.currentLink}`}>Make Collage</Link>
        <Link to='/gallery' className={styles.link}>Community Gallery</Link>
        <Link to='/about' className={styles.link}>About</Link>
      </div>
    </div>
  )
}
