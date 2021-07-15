import React from 'react';
// components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// sections
import IntroSection from './sections/IntroSection/IntroSection';
import CreateSection from './sections/CreateSection/CreateSection';
// styles
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Navbar currentPage='home'/>
      <IntroSection/>
      <CreateSection/>
      <Footer/>
    </div>
  )
}
