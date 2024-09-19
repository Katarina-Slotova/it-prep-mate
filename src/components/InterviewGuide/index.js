import React from 'react'
import styles from './InterviewGuide.module.css'
import Card from '../Card'
import Navbar from '../Navbar'
import TwoColumnLayout from '../TwoColumnLayout'
import interviewImg from '../../images/InterviewGuide.png'

function InterviewGuide() {
  const guidelines = {
    title: 'General interview guidelines',
    text: 'Navigate any interview confidently. Impress your interviewer.',
    link: '/interviewguidelines',
  }

  const techQuestions = {
    title: 'Elevator Pitch',
    text: 'Be one step ahead of your interviewer. Have a look at the questions they might ask.',
    link: '/underconstruction',
  }

  const otherQuestions = {
    title: 'Technical questions',
    text: 'Be one step ahead of your interviewer. Have a look at the questions they might ask.',
    link: '/underconstruction',
  }

  const elevatorPitch = {
    title: 'Non-Technical questions',
    text: 'Be one step ahead of your interviewer. Have a look at the questions they might ask.',
    link: '/underconstruction',
  }

  const leftColumn = (
    <div className={styles.intro}>
      <p className={styles.introText}>
        Interviews can be a daunting step in the job search process, but with
        the right preparation, you can walk into any interview with{' '}
        <strong>confidence</strong> and leave a{' '}
        <strong>lasting impression</strong>.
      </p>
      <p>
        This guide will equip you with essential tips, from understanding the
        job description and researching the company to crafting thoughtful
        responses to common questions. Our step-by-step approach will help you
        feel prepared and ready to{' '}
        <strong>showcase your skills and experiences</strong> effectively.
      </p>
      <p>Let’s turn your next interview into a success!</p>
    </div>
  )

  const rightColumn = (
    <img src={interviewImg} className={styles.interviewImage} />
  )

  return (
    <div>
      <h1 className={styles.title}>Interview Guide</h1>
      <TwoColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />

      <h2 className={styles.subheading}>What can we help you with?</h2>

      <div className={styles.cards}>
        <Card
          title={guidelines.title}
          text={guidelines.text}
          link={guidelines.link}
        />
        <Card
          title={techQuestions.title}
          text={techQuestions.text}
          link={techQuestions.link}
        />
        <Card
          title={otherQuestions.title}
          text={otherQuestions.text}
          link={otherQuestions.link}
        />
        <Card
          title={elevatorPitch.title}
          text={elevatorPitch.text}
          link={elevatorPitch.link}
        />
      </div>
    </div>
  )
}

export default InterviewGuide
