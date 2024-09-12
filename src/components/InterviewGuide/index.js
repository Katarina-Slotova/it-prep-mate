import React from 'react'
import styles from './InterviewGuide.module.css'
import interviewImg from '../../images/InterviewGuide.png'
import TwoColumnLayout from '../TwoColumnLayout'

function InterviewGuide() {
  const rightColumn = (
    <img src={interviewImg} className={styles.interviewImage} />
  )

  const leftColumn = (
    <div>
      <h1 className={styles.title}>Ace Your Interview</h1>
      <div className={styles.secondText}>
        <p>
          Preparing for an interview can be a daunting task, but with the right
          guidance, you can approach it with <strong> confidence</strong>. Our interview guide
          offers insights into common interview questions, tips for both virtual
          and in-person interviews, and strategies to <strong>help you stand out</strong>.
        </p>
        <p>
          Whether you're prepping for a technical interview or navigating
          behavioral questions, we've got you covered.
        </p>
      </div>
    </div>
  )
  return (
    <div>
      <TwoColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />
    </div>
  )
}

export default InterviewGuide
