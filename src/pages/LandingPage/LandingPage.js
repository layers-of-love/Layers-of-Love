import React from 'react';
// components
import Navbar from '../../components/Navbar/Navbar';
// styles
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Navbar/>
    </div>
  )
}
