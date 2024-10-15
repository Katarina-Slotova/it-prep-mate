import React from 'react'
import * as styles from './TechnicalInterview.module.css'
import LargeCard from '../LargeCard'
import TwoColumnLayout from '../TwoColumnLayout'
import techinterviewImg from '../../images/techinterview.webp'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function TechnicalInterview() {
  const leftColumn = (
    <div className={styles.intro}>
      <p>
        Mastering technical interviews is crucial for landing your dream job in
        tech. This section equips you with essential resources, from coding
        challenges to common interview questions, to help you{' '}
        <strong>build confidence</strong> and{' '}
        <strong>sharpen your skills</strong>. While this guide provides a solid
        foundation, don't hesitate to explore additional platforms and tools to
        further enhance your preparation.
      </p>
      <p>
        Step up your game, get ready, ace your next interview & enter
        confidently into Canada's tech industry!
      </p>
    </div>
  )

  const rightColumn = (
    <img src={techinterviewImg} className={styles.techinterviewImg} />
  )

  const interviewquestions = {
    title: 'Common Interview Questions',
    text: 'Prepare for your next interview with a collection of common technical questions. Confidently navigate the non-coding aspects of technical interviews.',
    link: '/underconstruction',
  }
  const freeCodeCamp = {
    title: 'freeCodeCamp',
    text: 'The freeCodeCamp Coding Interview Prep page offers over 1,000 challenges focused on data structures, algorithms, and logic-based questions to help you prepare for technical interviews.',
    link: 'https://www.freecodecamp.org/learn/coding-interview-prep/',
    isLink: true,
  }

  const leetcode = {
    title: 'LeetCode',
    text: 'An online platform for coding interview preparation. Practice data structures and algorithms, learn about databases and system design, and much more!',
    link: 'https://leetcode.com/',
    isLink: true,
  }

  return (
    <div>
      <h1 className={styles.title}>
        Prepare for a Technical Interview With Us!
      </h1>

      <TwoColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />

      <div className={styles.cards}>
        <LargeCard
          title={leetcode.title}
          text={leetcode.text}
          link={leetcode.link}
          isLink={leetcode.isLink}
        />
        <LargeCard
          title={freeCodeCamp.title}
          text={freeCodeCamp.text}
          link={freeCodeCamp.link}
          isLink={freeCodeCamp.isLink}
        />
        <LargeCard
          title={interviewquestions.title}
          text={interviewquestions.text}
          link={interviewquestions.link}
          isLink={interviewquestions.isLink}
        />
      </div>

      <div className={styles.posArrow}>
        <Link to='/interviewguide' className={styles.redirectLink}>
          <FaArrowLeft className={styles.arrow} />{' '}
          <strong>Go back to Interview Guide main page</strong>
        </Link>
      </div>
    </div>
  )
}

export default TechnicalInterview
