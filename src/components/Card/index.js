import React from 'react'
import styles from './Card.module.css'

function Card({ title, text }) {
  return (
    <div class={styles.card}>
      <div class={styles.cardDetails}>
        <p class={styles.textTitle}>{title}</p>
        <p class={styles.textBody}>{text}</p>
      </div>
      <button class={styles.cardButton}>More info</button>
    </div>
  )
}

export default Card
