import React from 'react'
import styles from './JobSearchGuide.module.css'
import Navbar from '../Navbar'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function JobSearchGuide() {
  const indeed = {
    title: 'Indeed',
    text: 'Popular job search engine with listings across various sectors.',
  }

  const linkedin = {
    title: 'LinkedIn',
    text: 'Professional networking site with job postings and company profiles.',
  }

  const canadaJobs = {
    title: 'Canada Jobs',
    text: 'Job search site focusing on opportunities across Canada.',
  }

  const simplyHired = {
    title: 'Simply Hired',
    text: 'Job search engine aggregating listings from multiple sources.',
  }

  const glassdoor = {
    title: 'Glassdoor',
    text: 'Job listings and company reviews, including salary information.',
  }

  const jobBank = {
    title: 'Job Bank',
    text: 'Canada’s national job board for various government job postings.',
  }

  const goJobs = {
    title: 'Go Jobs',
    text: 'Listings of government jobs in Ontario.',
  }

  const canadaMunicipalJobs = {
    title: 'Canada Municipal Jobs',
    text: 'Jobs available in Ontario’s municipal sector.',
  }

  const ontarioInternshipProgram = {
    title: 'Ontario Internship Program',
    text: 'Internships offered by the Ontario government.',
  }

  const careerEdge = {
    title: 'Career Edge',
    text: 'Internship and career development opportunities.',
  }

  const charityVillage = {
    title: 'Charity Village',
    text: 'Volunteer opportunities and nonprofit job listings.',
  }

  const ontarioVolunteerCenter = {
    title: 'Ontario Volunteer Center',
    text: 'Volunteer opportunities and resources across Ontario.',
  }

  const volunteerCanada = {
    title: 'Volunteer Canada',
    text: 'National platform for finding volunteer opportunities.',
  }

  return (
    <div>
      <h1 className={styles.title}>Job Search Guide</h1>

      <div className={styles.intro}>
        <h2 className={styles.subheading} style={{ textAlign: 'left' }}>
          How to use this Job Search Guide?
        </h2>
        <p>
          Whether you’re just starting or ready to apply, we’ve got the
          resources to help you succeed. We’ve designed this guide to give you
          the flexibility to approach your job search in the way that works best
          for you.
        </p>
        <h3>Choose one of the approaches below:</h3>
        <ul>
          <li>
            <p>
              <strong>Resume-first:</strong> Start by exploring our Resume Guide
              to fine-tune your application materials before diving into the top
              job platforms. If you've already found a job offer you're excited
              about, you can check out the Resume Guide to tailor your resume
              before applying.
            </p>
          </li>
          <li>
            <p>
              <strong>Job search-first: </strong> Prefer to start by exploring
              job opportunities? No problem! Begin by browsing our recommended
              job posting resources below to find roles that match your skills
              and interests. Once you've found a position you're interested in,
              you can head over to our Resume Guide to create or polish your
              resume, ensuring it’s tailored to the job you’re applying for.
            </p>
          </li>
        </ul>
        <Link
          to='/resumeguide'
          className={styles.redirectLink}
          style={{ padding: '1%' }}
        >
          <strong>Have a look at the Resume Guide</strong>{' '}
          <FaArrowRight className={styles.arrow} />
        </Link>
      </div>

      <h2 className={styles.subheading}>Job Postings</h2>

      <div className={styles.cards}>
        <Card title={indeed.title} text={indeed.text} />
        <Card title={linkedin.title} text={linkedin.text} />
        <Card title={canadaJobs.title} text={canadaJobs.text} />
        <Card title={simplyHired.title} text={simplyHired.text} />
        <Card title={glassdoor.title} text={glassdoor.text} />
      </div>

      <h2 className={styles.subheading}>Government Job Postings</h2>
      <div className={styles.cards}>
        <Card title={jobBank.title} text={jobBank.text} />
        <Card title={goJobs.title} text={goJobs.text} />
        <Card
          title={canadaMunicipalJobs.title}
          text={canadaMunicipalJobs.text}
        />
      </div>
      <h2 className={styles.subheading}>Internship Postings</h2>
      <div className={styles.cards}>
        <Card
          title={ontarioInternshipProgram.title}
          text={ontarioInternshipProgram.text}
        />
        <Card title={careerEdge.title} text={careerEdge.text} />
      </div>
      <h2 className={styles.subheading}>Volunteer Postings</h2>
      <div className={styles.cards}>
        <Card title={charityVillage.title} text={charityVillage.text} />
        <Card
          title={ontarioVolunteerCenter.title}
          text={ontarioVolunteerCenter.text}
        />
        <Card title={volunteerCanada.title} text={volunteerCanada.text} />
      </div>
    </div>
  )
}

export default JobSearchGuide
