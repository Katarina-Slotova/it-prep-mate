import React from 'react'
import styles from './ResumeGuide.module.css'
import Navbar from '../Navbar'

function ResumeGuide() {
  return (
    <div>
      <h1 className={styles.title}>Resume Guide</h1>
      <div className={styles.intro}>
        {' '}
        <h2 className={styles.subheading} style={{ textAlign: 'left' }}>
          General Formatting Guidelines
        </h2>
        <ul>
          <li>
            <p>Keep the resume to 1-2 pages.</p>
          </li>
          <li>
            <p>
              Use bullet points; avoid complete sentences and personal pronouns
              (e.g., I, me, my). An exception would be the first resume section
              (typically called Profile Summary or simply Summary), where you
              can choose between bullet points and full short,
              straight-to-the-point sentences.
            </p>
          </li>
          <li>
            <p>
              List education and experience in reverse chronological order,
              starting with the most recent.
            </p>
          </li>
          <li>
            <p>
              Include diplomas, degrees, certificates, and any other relevant
              courses or training. Exclude expired certificates.
            </p>
          </li>
          <li>
            <p>
              Detail both paid and unpaid experiences, specifying if they are
              co-op, field placements, or volunteer work.
            </p>
          </li>
          <li>
            <p>
              Organise sections with varied headings, such as Additional
              Training, Related Experience, Volunteer Experience, etc.
            </p>
          </li>
          <li>
            <p>
              Proofread thoroughly for spelling and grammatical accuracy to
              eliminate errors. Use helpful tools for spelling and grammar
              checks, such as Grammarly.
            </p>
          </li>
          <li>
            <p>Recommended font sizes: 11-12.</p>
          </li>
          <li>
            <p>
              Recommended Font format : Arial, Times New Roman, alternatively
              similar sans-serif fonts.
            </p>
          </li>
          <li>
            <p>
              Exclude any work experience older than 10 years. An exception
              would be a work experience followed by a significant career gap.
            </p>
          </li>
          <li>
            <p>
              Recommended resume sections: Profile Summary (also called Summary
              or Professional Summary); Technical Skills, Work/Professional
              Experience; Volunteering; Projects (if there are too many, choose
              2-3), Accomplishments; Education & Certificates
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ResumeGuide
