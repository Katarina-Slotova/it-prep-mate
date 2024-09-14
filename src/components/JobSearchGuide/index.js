import React from 'react'
import styles from './JobSearchGuide.module.css'
import jobSearchGuideImg from '../../images/JobSearchGuide.png'
import TwoColumnLayout from '../TwoColumnLayout'

function JobSearchGuide() {
  const leftColumn = (
    <img src={jobSearchGuideImg} className={styles.interviewImage} />
  )

  const rightColumn = (
    <div>
      <h1 className={styles.title}> Discover your dream job.</h1>
      <div className={styles.secondText}>
        <p>
          Finding a job in Canada requires a{' '}
          <strong>well-planned approach</strong>. Our job search guide walks you
          through the essential steps, from crafting a tailored resume to
          navigating the top job portals.
        </p>
        <p>
          With tips on applying to different industries and strategies for
          increasing your chances of success, this guide is your{' '}
          <strong>roadmap to landing your next role</strong>.
        </p>
      </div>
    </div>
  )

  return (
    <div className={styles.infoSection}>
      <TwoColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />
    </div>
  )
}

export default JobSearchGuide
