import React from 'react'
import * as styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.attribution}>
        Built with ❤️ by Aayushi, Katarina, Kriti & Swapna &middot; ©{' '}
        {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer
