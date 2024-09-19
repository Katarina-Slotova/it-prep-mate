import React from 'react'
import * as styles from './AgenciesSection.module.css'
import agenciesImg from '../../images/agencies.png'
import TwoColumnLayout from '../TwoColumnLayout'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function Agencies() {
  const leftColumn = <img src={agenciesImg} className={styles.agenciesImage} />

  const rightColumn = (
    <div>
      <h1 className={styles.title}>Let Recruitment Agencies Work For You </h1>
      <div className={styles.secondText}>
        <p>
          Recruitment agencies can be invaluable in your job search, offering{' '}
          <strong>access to job opportunities</strong> that might{' '}
          <strong>not be publicly advertised</strong>.
        </p>
        <p>
          Our guide to agencies gives you a rundown of the{' '}
          <strong>top recruitment agencies</strong> in Canada, how they can help
          you find both temporary and permanent positions, and tips on how to
          make the most of their services.
        </p>
      </div>
      <Link to='/agencies' className={styles.redirectLink}>
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

export default Agencies
