import React from 'react'
import TwoColumnLayout from '../TwoColumnLayout'
import styles from './Intro.module.css'
import heroImg from '../../images/hero-img.jpg'

function Intro() {
  return (
    <div>
      <TwoColumnLayout
        leftColumn={<p>Hello</p>}
        rightColumn={<img src={heroImg} className={styles.heroImage} />}
      />
    </div>
  )
}

export default Intro
