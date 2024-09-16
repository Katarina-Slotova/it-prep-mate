import React from 'react'
import TwoColumnLayout from '../TwoColumnLayout'
import IntroText from '../IntroText'
import styles from './Intro.module.css'
import heroImg from '../../images/heroimage.jpeg'

function Intro() {
  const rightColumn = <img src={heroImg} className={styles.heroImage} />

  return (
    <div>
      <TwoColumnLayout leftColumn={<IntroText />} rightColumn={rightColumn} />
    </div>
  )
}

export default Intro
