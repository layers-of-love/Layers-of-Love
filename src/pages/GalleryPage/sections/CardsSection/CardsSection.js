import React from 'react';
// components
import Card from '../../../../components/Card/Card';
// styles
import styles from './CardsSection.module.css';

export default function CardsSection() {
  return (
    <div className={styles.container}>
      <Card/><Card/><Card/><Card/><Card/><Card/>
    </div>
  )
}
