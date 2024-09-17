import React from 'react'
import styles from './InterviewGuide.module.css'
import Card from '../Card'
import Navbar from '../Navbar'

function InterviewGuide() {
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
      <h1 className={styles.title}>Interview Guide</h1>
      <h2 className={styles.title}>Job Postings</h2>

      <div className={styles.cards}>
        <Card title={indeed.title} text={indeed.text} />
        <Card title={linkedin.title} text={linkedin.text} />
        <Card title={canadaJobs.title} text={canadaJobs.text} />
        <Card title={simplyHired.title} text={simplyHired.text} />
        <Card title={glassdoor.title} text={glassdoor.text} />
      </div>

      <h2 className={styles.title}>Government Job Postings</h2>
      <div className={styles.cards}>
        <Card title={jobBank.title} text={jobBank.text} />
        <Card title={goJobs.title} text={goJobs.text} />
        <Card
          title={canadaMunicipalJobs.title}
          text={canadaMunicipalJobs.text}
        />
      </div>
      <h2 className={styles.title}>Internship Postings</h2>
      <div className={styles.cards}>
        <Card
          title={ontarioInternshipProgram.title}
          text={ontarioInternshipProgram.text}
        />
        <Card title={careerEdge.title} text={careerEdge.text} />
      </div>
      <h2 className={styles.title}>Volunteer Postings</h2>
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

export default InterviewGuide
