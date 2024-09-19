import React from 'react'
import * as styles from './JobSearchGuideSection.module.css'
import jobSearchGuideImg from '../../images/jobSearchGuide.png'
import TwoColumnLayout from '../TwoColumnLayout'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function JobSearchGuideSection() {
  const leftColumn = (
    <img src={jobSearchGuideImg} className={styles.interviewImage} />
  )

  const rightColumn = (
    <div>
      <h1 className={styles.title}> Discover Your Dream Job</h1>
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
      <Link to='/jobsearchguide' className={styles.redirectLink}>
        <strong>Read more</strong> <FaArrowRight className={styles.arrow} />
      </Link>
    </div>
  )

  return (
    <div className={styles.infoSection}>
      <TwoColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />
    </div>
  )
}

export default JobSearchGuideSection
