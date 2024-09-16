import React from 'react'
import styles from './JobSearchGuide.module.css'
import Navbar from '../Navbar'

function JobSearchGuide() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.title}>Job Search Guide</h1>
      <h1 className={styles.title}>Job Postings</h1>

      <div className={styles.cards}>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Indeed</p>
            <p class={styles.textBody}>
              Popular job search engine with listings across various sectors.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>LinkedIn</p>
            <p class={styles.textBody}>
              Professional networking site with job postings and company
              profiles.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Canada Jobs</p>
            <p class={styles.textBody}>
              Job search site focusing on opportunities across Canada.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Simply Hired</p>
            <p class={styles.textBody}>
              Job search engine aggregating listings from multiple sources.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Glassdoor</p>
            <p class={styles.textBody}>
              Job listings and company reviews, including salary information.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
      </div>

      <h1 className={styles.title}>Government Job Postings</h1>
      <div className={styles.cards}>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Job Bank</p>
            <p class={styles.textBody}>
              Canada’s national job board for various government job postings.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Go Jobs</p>
            <p class={styles.textBody}>
              Listings of government jobs in Ontario.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Canada Municipal Jobs</p>
            <p class={styles.textBody}>
              Jobs available in Ontario’s municipal sector.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
      </div>
      <h1 className={styles.title}>Internship Postings</h1>
      <div className={styles.cards}>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Ontario Internship Program</p>
            <p class={styles.textBody}>
              Internships offered by the Ontario government.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Career Edge</p>
            <p class={styles.textBody}>
              Internship and career development opportunities.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
      </div>
      <h1 className={styles.title}>Volunteer Postings</h1>
      <div className={styles.cards}>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Charity Village</p>
            <p class={styles.textBody}>
              Volunteer opportunities and nonprofit job listings.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Ontario Volunteer Center</p>
            <p class={styles.textBody}>
              Volunteer opportunities and resources across Ontario.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
        <div class={styles.card}>
          <div class={styles.cardDetails}>
            <p class={styles.textTitle}>Volunteer Canada</p>
            <p class={styles.textBody}>
              National platform for finding volunteer opportunities.
            </p>
          </div>
          <button class={styles.cardButton}>More info</button>
        </div>
      </div>
    </div>
  )
}

export default JobSearchGuide
