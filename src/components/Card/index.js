import React from 'react'
import * as styles from './Card.module.css'
import { useNavigate } from 'react-router-dom'

function Card({ title, text, link }) {
	const navigate = useNavigate()
  function handleRedirect() {
    navigate(link)
  }

  return (
    <div class={styles.card}>
      <div class={styles.cardDetails}>
        <p class={styles.textTitle}>{title}</p>
        <p class={styles.textBody}>{text}</p>
      </div>
      <button class={styles.cardButton} onClick={() => handleRedirect(link)}>
        More info
      </button>
    </div>
  )
}

export default Card
