import React from 'react'
import styles from './UnderConstruction.module.css'
import networkingImg from '../../images/construction.jpeg'
import TwoColumnLayout from '../TwoColumnLayout'

function Networking() {
  const rightColumn = (
    <img src={networkingImg} className={styles.networkingImg} />
  )

  const leftColumn = (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Page Under Construction</h1>
      <div className={styles.secondText}>
        <p>
          More content that will help you with launching a successful career in
          Canada coming soon.
        </p>
        <p>Stay tuned!</p>
      </div>
    </div>
  )

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Page Under Construction</h1>
      <div className={styles.secondText}>
        <p>
          More content that will help you with launching a successful career in
          Canada coming soon.
        </p>
        <p>Stay tuned!</p>
      </div>

      <img src={networkingImg} className={styles.networkingImg} />
    </div>
  )
}

export default Networking
