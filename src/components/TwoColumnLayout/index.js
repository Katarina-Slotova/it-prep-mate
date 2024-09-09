import React from 'react'
import styles from './TwoColumnLayout.module.css'

function TwoColumnLayout({ leftColumn, rightColumn }) {
  return (
    <div className={styles.layout}>
      <div className={styles.leftColumn}>{leftColumn}</div>
      <div className={styles.rightColumn}>{rightColumn}</div>
    </div>
  )
}

export default TwoColumnLayout
