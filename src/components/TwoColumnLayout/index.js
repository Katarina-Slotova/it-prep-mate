import React from 'react'
import IntroText from '../IntroText'
import styles from './TwoColumnLayout.module.css'
import heroImg from '../../images/hero-img.jpg'

function TwoColumnLayout({ rightColumn }) {
  return (
    <div className={styles.layout}>
      <div className={styles.leftColumn}>{<IntroText />}</div>
      <div className={styles.rightColumn}>
        <img src={heroImg} className={styles.heroImage} />
      </div>
    </div>
  )
}

export default TwoColumnLayout
