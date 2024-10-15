import React from 'react'
import * as styles from './Networking.module.css'
import Card from '../Card'
import TwoColumnLayout from '../TwoColumnLayout'
import networkingImg from '../../images/networking.png'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function Networking() {
  const leftColumn = (
    <div className={styles.intro}>
      <p>
        Let's face it — networking can seem a bit intimidating. And
        understandably so! Walking into a room full of strangers, not sure where
        to start, how to approach new connections online, what to say. Who
        wouldn't get nervous? Yes, we've all been there... But trust us, it gets
        easier. A little bit of preparation and the right mindset goes a long
        way when it comes to networking. Think of it as just{' '}
        <strong>
          having conversations with people who share your interests
        </strong>
        . The more you do it, the more natural it becomes.
      </p>
      <p>
        Whether you're meeting people at an event or connecting online, building
        meaningful relationships with professionals in the tech field is key to
        career growth. This guide will give you some easy tips to{' '}
        <strong>boost your confidence</strong>, make networking less scary and
        more rewarding, so you can{' '}
        <strong>turn those connections into real opportunities</strong>.
      </p>
      <p>No pressure, just take it one step at a time. You've got this!</p>
    </div>
  )

  const rightColumn = (
    <img src={networkingImg} className={styles.networkingImg} />
  )

  const tips = {
    title: 'Networking tips',
    text: "Connect, grow, and thrive in Canada's tech scene. Network your way to success with our tips!",
    link: '/networking/networkingtips',
  }

  const communities = {
    title: 'Communities',
    text: "Discover your tribe - join Canada's thriving tech communities and fuel your growth!",
    link: '/networking/communities',
  }

  return (
    <div>
      <h1 className={styles.title}>Networking</h1>

      <TwoColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />

      <h2 className={styles.subheading}>What can we help you with?</h2>

      <div className={styles.cards}>
        <Card title={tips.title} text={tips.text} link={tips.link} />
        <Card
          title={communities.title}
          text={communities.text}
          link={communities.link}
        />
      </div>

      <div className={styles.posArrow}>
        <Link to='/' className={styles.redirectLink}>
          <FaArrowLeft className={styles.arrow} />{' '}
          <strong>Go back to Home page</strong>
        </Link>
      </div>
    </div>
  )
}

export default Networking
