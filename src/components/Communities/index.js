import React from 'react'
import * as styles from './Communities.module.css'
import Card from '../Card'
import TwoColumnLayout from '../TwoColumnLayout'
import communityImg from '../../images/community.webp'
import { Link } from 'react-router-dom'

function Communities() {
  const leftColumn = (
    <div className={styles.intro}>
      <p>
        Connecting with tech communities is a powerful way to expand your
        professional network, learn new skills, and stay motivated and inspired.
        Whether you're <strong>new to Canada</strong>, looking to{' '}
        <strong>deepen your involvement in the industry</strong>,{' '}
        <strong>meet like-minded professionals</strong>, or{' '}
        <strong>stay updated on the latest trends</strong>, this section
        connects you to key tech communities across Canada. These groups offer
        support, knowledge sharing, and collaboration opportunities that can
        help you thrive. Dive in and find your place in the country's dynamic
        tech ecosystem!
      </p>
      <p>
        While this list is a great starting point, don't forget to explore
        platforms like{' '}
        <a
          className={styles.redirectLink}
          href='https://www.meetup.com/topics/technology/ca/'
          target='_blank'
        >
          meetup.com
        </a>{' '}
        and other resources to find even more local communities that fit your
        needs.
      </p>
    </div>
  )

  const rightColumn = <img src={communityImg} className={styles.communityImg} />

  const tips = {
    title: 'Networking tips',
    text: "Connect, grow, and thrive in Canada's tech scene. Network your way to success with our tips!",
    link: '/networkingtips',
  }

  const communities = {
    title: 'Communities',
    text: "Discover your tribe - join Canada's thriving tech communities and fuel your growth!",
    link: '/underconstruction',
  }

  return (
    <div>
      <h1 className={styles.title}>Communities</h1>

      <TwoColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />

      <div className={styles.cards}>
        <Card title={tips.title} text={tips.text} link={tips.link} />
        <Card
          title={communities.title}
          text={communities.text}
          link={communities.link}
        />
      </div>
    </div>
  )
}

export default Communities
