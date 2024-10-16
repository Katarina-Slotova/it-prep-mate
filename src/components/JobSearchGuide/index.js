import React from 'react'
import * as styles from './JobSearchGuide.module.css'
import Navbar from '../Navbar'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function JobSearchGuide() {
  const indeed = {
    title: 'Indeed',
    text: 'Popular job search engine with listings across various sectors.',
    link: 'http://www.indeed.ca/',
    isLink: true,
  }

  const linkedin = {
    title: 'LinkedIn',
    text: 'Professional networking site with job postings and company profiles.',
    link: 'http://www.linkedin.com/jobs/',
    isLink: true,
  }

  const canadaJobs = {
    title: 'Canada Jobs',
    text: 'Job search site focusing on opportunities across Canada.',
    link: 'http://www.canadajobs.com',
    isLink: true,
  }

  const simplyHired = {
    title: 'Simply Hired',
    text: 'Job search engine aggregating listings from multiple sources.',
    link: 'http://www.simplyhired.ca/',
    isLink: true,
  }

  const glassdoor = {
    title: 'Glassdoor',
    text: 'Job listings and company reviews, including salary information.',
    link: 'http://www.glassdoor.ca',
    isLink: true,
  }

  const jobBank = {
    title: 'Job Bank',
    text: 'Canada’s national job board for various government job postings.',
    link: 'http://www.on.jobbank.gc.ca/',
    isLink: true,
  }

  const goJobs = {
    title: 'Go Jobs',
    text: 'Listings of government jobs in Ontario.',
    link: 'http://www.gojobs.gov.on.ca/Jobs.aspx',
    isLink: true,
  }

  const canadaMunicipalJobs = {
    title: 'Canada Municipal Jobs',
    text: 'Jobs available in Ontario’s municipal sector.',
    link: 'http://www.ontariomunicipaljobs.com',
    isLink: true,
  }

  const ontarioInternshipProgram = {
    title: 'Ontario Internship Program',
    text: 'Internships offered by the Ontario government.',
    link: 'https://www.internship.gov.on.ca/mbs/sdb/intern.nsf/',
    isLink: true,
  }

  const careerEdge = {
    title: 'Career Edge',
    text: 'Internship and career development opportunities.',
    link: 'https://www.careeredge.ca/en/home',
    isLink: true,
  }

  const charityVillage = {
    title: 'Charity Village',
    text: 'Volunteer opportunities and nonprofit job listings.',
    link: 'https://charityvillage.com',
    isLink: true,
  }

  const ontarioVolunteerCenter = {
    title: 'Ontario Volunteer Center',
    text: 'Volunteer opportunities and resources across Ontario.',
    link: 'https://ovcn.ca/',
    isLink: true,
  }

  const volunteerCanada = {
    title: 'Volunteer Canada',
    text: 'National platform for finding volunteer opportunities.',
    link: 'https://volunteer.ca/',
    isLink: true,
  }

  return (
    <div>
      <h1 className={styles.title}>Job Search Guide</h1>

      <div className={styles.intro}>
        <h2 className={styles.subheading} style={{ textAlign: 'left' }}>
          How to use this Job Search Guide?
        </h2>
        <p>
          Whether you're just starting or ready to apply, we've got the
          resources to help you succeed. We've designed this guide to give you
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
          to='/jobsearchguide/resumeguide'
          className={styles.redirectLink}
          style={{ padding: '1%' }}
        >
          <strong>Have a look at the Resume Guide</strong>{' '}
          <FaArrowRight className={styles.arrow} />
        </Link>
      </div>

      <h2 className={styles.subheading}>Job Postings</h2>

      <div className={styles.cards}>
        <Card
          title={indeed.title}
          text={indeed.text}
          link={indeed.link}
          isLink={indeed.isLink}
        />
        <Card
          title={linkedin.title}
          text={linkedin.text}
          link={linkedin.link}
          isLink={linkedin.isLink}
        />
        <Card
          title={canadaJobs.title}
          text={canadaJobs.text}
          link={canadaJobs.link}
          isLink={canadaJobs.isLink}
        />
        <Card
          title={simplyHired.title}
          text={simplyHired.text}
          link={simplyHired.link}
          isLink={simplyHired.isLink}
        />
        <Card
          title={glassdoor.title}
          text={glassdoor.text}
          link={glassdoor.link}
          isLink={glassdoor.isLink}
        />
      </div>

      <h2 className={styles.subheading}>Government Job Postings</h2>
      <div className={styles.cards}>
        <Card
          title={jobBank.title}
          text={jobBank.text}
          link={jobBank.link}
          isLink={jobBank.isLink}
        />
        <Card
          title={goJobs.title}
          text={goJobs.text}
          link={goJobs.link}
          isLink={goJobs.isLink}
        />
        <Card
          title={canadaMunicipalJobs.title}
          text={canadaMunicipalJobs.text}
          link={canadaMunicipalJobs.link}
          isLink={canadaMunicipalJobs.isLink}
        />
      </div>
      <h2 className={styles.subheading}>Internship Postings</h2>
      <div className={styles.cards}>
        <Card
          title={ontarioInternshipProgram.title}
          text={ontarioInternshipProgram.text}
          link={ontarioInternshipProgram.link}
          isLink={ontarioInternshipProgram.isLink}
        />
        <Card
          title={careerEdge.title}
          text={careerEdge.text}
          link={careerEdge.link}
          isLink={careerEdge.isLink}
        />
      </div>
      <h2 className={styles.subheading}>Volunteer Postings</h2>
      <div className={styles.cards}>
        <Card
          title={charityVillage.title}
          text={charityVillage.text}
          link={charityVillage.link}
          isLink={charityVillage.isLink}
        />
        <Card
          title={ontarioVolunteerCenter.title}
          text={ontarioVolunteerCenter.text}
          link={ontarioVolunteerCenter.link}
          isLink={ontarioVolunteerCenter.isLink}
        />
        <Card
          title={volunteerCanada.title}
          text={volunteerCanada.text}
          link={volunteerCanada.link}
          isLink={volunteerCanada.isLink}
        />
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

export default JobSearchGuide
