import React from 'react';
// components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// sections
import IntroSection from './sections/IntroSection/IntroSection';
import ArtistsSection from './sections/ArtistsSection/ArtistsSection';
// styles
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Navbar currentPage='about'/>
      <IntroSection/>
      <ArtistsSection/>
      <Footer/>
    </div>
  )
}
