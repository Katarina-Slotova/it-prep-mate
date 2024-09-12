import React from 'react'
import styles from './IntroText.module.css'

function IntroText() {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <strong style={{ color: '#db634d' }}>ItPrepMate</strong>:
      </h1>
      <h1 className={styles.title}>Your Ultimate Tech Career Launchpad</h1>
      {/* <h3>Transform Your Canadian Tech Future with ItPrepMate</h3> */}
      <div className={styles.introText}>
        <p>
          At ItPrepMate, we understand that starting a career in a new country
          can be both exciting and challenging. That’s why we’ve created an{' '}
          <strong style={{ color: '#db634d' }}>all-in-one platform</strong>{' '}
          tailored specifically for <strong>IT professionals</strong> eager to
          make their mark in Canada’s vibrant tech industry.
        </p>
        <p>
          Our comprehensive resources and expert guidance are designed to{' '}
          <strong>support you every step of the way</strong>, from initial job
          search strategies to successful interview preparation and beyond.
        </p>
        <p>
          With ItPrepMate, you’ll gain access to everything you need to turn
          your career aspirations into reality. Our platform offers a{' '}
          <strong>wealth of tools and insights</strong> to help you navigate the
          Canadian job market with confidence, build meaningful connections, and
          secure the opportunities you’ve been dreaming of.
        </p>
        <p>
          Let’s work together to shape your future and{' '}
          <strong>achieve the success </strong>
          you’ve always envisioned.
        </p>
        <p className={styles.signature}>
          ~ Aayushi, Amruta, Katarina, Kriti & Swapna ~
        </p>
      </div>
    </div>
  )
}

export default IntroText
