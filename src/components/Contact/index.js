import React from 'react'
import * as styles from './Contact.module.css'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function Contact() {
  return (
    <div>
      <h1 className={styles.title}>Let's get in touch!</h1>
      <div className={styles.intro}>
        <p>
          We'd love to hear from you! Whether you have questions, need
          assistance, or want to learn more about how we can help you succeed in
          Canada's tech industry, feel free to reach out.
        </p>
        <p>
          Our team is here to support you on your journey. Let's connect and
          start a conversation!
        </p>
        <p>
          <strong>Aayushi: </strong>
          <a
            className={styles.redirectLink}
            href='https://www.linkedin.com/in/aayushiparekh123456/'
            target='_blank'
          >
            Connect with me on LinkedIn
          </a>
        </p>
        <p>
          <strong>Katarina: </strong>
          <a
            className={styles.redirectLink}
            href='https://www.linkedin.com/in/katarina-slotova-804466131/'
            target='_blank'
          >
            Connect with me on LinkedIn
          </a>
        </p>
        <p>
          <strong>Kriti: </strong>
          <a
            className={styles.redirectLink}
            href='https://www.linkedin.com/in/kriti-upadhyay-8781932b7/'
            target='_blank'
          >
            Connect with me on LinkedIn
          </a>
        </p>
        <p>
          <strong>Swapna: </strong>
          <a
            className={styles.redirectLink}
            href='https://www.linkedin.com/in/swapna-tambe-640b7634/'
            target='_blank'
          >
            Connect with me on LinkedIn
          </a>
        </p>
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

export default Contact
