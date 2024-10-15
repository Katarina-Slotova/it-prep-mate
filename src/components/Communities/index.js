import React from 'react'
import * as styles from './Communities.module.css'
import LargeCard from '../LargeCard'
import TwoColumnLayout from '../TwoColumnLayout'
import communityImg from '../../images/community.webp'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

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
        connects you to tech communities across Canada. These groups offer
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

  const techto = {
    title: 'TechTO',
    text: "Join 60,000+ subscribers reading TechTO's weekly newsletters. Stay in the loop. Connect with the community. Learn about events and careers.",
    link: 'https://www.techto.org/',
    isLink: true,
  }

  const canadaitclub = {
    title: 'Canada IT Club',
    text: 'Dynamic community that brings together IT professionals from across Canada, fostering collaboration, knowledge sharing, and career growth',
    link: 'https://canadaitclub.ca/',
    isLink: true,
  }

  const techinto = {
    title: 'TechinTO',
    text: 'The Hub for Entrepreneurs & Tech Talent in Toronto. Expand your network. Meet fellow creators. Showcase your work.',
    link: 'https://www.techinto.ca/',
    isLink: true,
  }

  const womenintech = {
    title: 'Women in Tech Canada',
    text: 'Official chapter for Women in Tech Canada, part of the global Women in Tech movement. Dynamic and inclusive community dedicated to fostering empowerment, diversity, and innovation within the technology sector.',
    link: 'https://women-in-tech.org/ca/',
    isLink: true,
  }

  return (
    <div>
      <h1 className={styles.title}>Communities</h1>

      <TwoColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />

      <div className={styles.cards}>
        <LargeCard
          title={canadaitclub.title}
          text={canadaitclub.text}
          link={canadaitclub.link}
          isLink={canadaitclub.isLink}
        />
        <LargeCard
          title={womenintech.title}
          text={womenintech.text}
          link={womenintech.link}
          isLink={womenintech.isLink}
        />
        <LargeCard
          title={techto.title}
          text={techto.text}
          link={techto.link}
          isLink={techto.isLink}
        />
        <LargeCard
          title={techinto.title}
          text={techinto.text}
          link={techinto.link}
          isLink={techinto.isLink}
        />
      </div>

      <div className={styles.posArrow}>
        <Link to='/networking' className={styles.redirectLink}>
          <FaArrowLeft className={styles.arrow} />{' '}
          <strong>Go back to Networking main page</strong>
        </Link>
      </div>
    </div>
  )
}

export default Communities
