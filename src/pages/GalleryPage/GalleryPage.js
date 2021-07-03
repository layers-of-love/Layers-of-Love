import React from 'react';
// components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// sections
import IntroSection from './sections/IntroSection/IntroSection';
import CardsSection from './sections/CardsSection/CardsSection';
// styles
import styles from './GalleryPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Navbar currentPage='gallery'/>
      <IntroSection/>
      <CardsSection/>
      <Footer/>
    </div>
  )
}
