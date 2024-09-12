import React from 'react'
import styles from './Networking.module.css'
import networkingImg from '../../images/networking.png'
import TwoColumnLayout from '../TwoColumnLayout'

function Networking() {
  const rightColumn = (
    <img src={networkingImg} className={styles.networkingImg} />
  )

  const leftColumn = (
    <div>
      <h1 className={styles.title}>Master the Art of Networking</h1>
      <div className={styles.secondText}>
        <p>
          In today's job market, networking is key to{' '}
          <strong>unlocking opportunities</strong>. Our networking section
          provides advice on building meaningful professional relationships,
          both online and in person.
        </p>
        <p>
          Learn how to connect with industry leaders, attend networking events,
          and leverage platforms like LinkedIn to expand your reach and{' '}
          <strong>grow your career prospects</strong>.
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

export default Networking
