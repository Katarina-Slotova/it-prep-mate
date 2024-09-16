import React from 'react'
import styles from './SecondSection.module.css'
import jobImg from '../../images/job.jpeg'
import TwoColumnLayout from '../TwoColumnLayout'

function SecondSection() {
  const leftColumn = <img src={jobImg} className={styles.jobImage} />

  const rightColumn = (
    <div>
      <h1 className={styles.title}>The Gateway To Your Next Job Starts Here</h1>
      <div className={styles.secondText}>
        <p>
          Whether you're navigating the complexities of the Canadian job market
          or preparing for your next big interview,  <strong> ItPrepMate has you covered</strong>.
        </p>
        <p>
          From expert guidance on crafting the perfect resume and mastering the
          art of networking, to comprehensive interview preparation and insider
          tips tailored to the tech industry—we've gathered everything you need,
          <strong> all in one place</strong>.
        </p>
        <p>
          Our goal is to empower you with the tools and knowledge to not just
          land a job, but to <strong>thrive in your tech career</strong> in Canada. Let’s turn
          your aspirations into achievements and build the future you’ve always
          envisioned, one step at a time. Your success story starts here.
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

export default SecondSection
