import React from 'react'
import TwoColumnLayout from '../TwoColumnLayout'
import IntroText from '../IntroText'
import styles from './Intro.module.css'
import heroImg from '../../images/hero-img.jpg'

function Intro() {
  return (
    <div>
      <TwoColumnLayout
        leftColumn={<IntroText />}
        rightColumn={<img src={heroImg} className={styles.heroImage} />}
      />
    </div>
  )
}

export default Intro
