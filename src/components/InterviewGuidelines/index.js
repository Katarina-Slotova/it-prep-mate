import React from 'react'
import styles from './InterviewGuidelines.module.css'
import Navbar from '../Navbar'
import Card from '../Card'
import { Link } from 'react-router-dom'

function InterviewGuidelines() {
  return (
    <div>
      <h1 className={styles.title}>General Interview Guidelines</h1>
      <div className={styles.intro}>
        <p>SOME INTRO TEXT? IMAGE?</p>
      </div>
      <h2 className={styles.guidelineTitle}>
        1. Understanding the Job Description
      </h2>
      <div className={styles.intro}>
        <p>
          Before heading into any interview, it’s crucial to grasp the
          responsibilities and expectations of the role. This will allow you to
          tailor your answers and demonstrate your qualifications more
          effectively.
        </p>
        <ul>
          <li>
            <p>
              <strong>Research the role.</strong> Go over the job description
              carefully, and identify the required skills, qualifications, and
              experience. Make a list of keywords that describe the role.
            </p>
          </li>
          <li>
            <p>
              <strong>Align your experience.</strong> Match your skills and
              experiences to the job description. Prepare specific examples that
              show how your past work aligns with the requirements of the
              position.
            </p>
          </li>
        </ul>
      </div>

      <h2 className={styles.guidelineTitle}>2. Researching the Company</h2>
      <div className={styles.intro}>
        <p>
          Knowledge about the company can set you apart from other candidates.
          Showing genuine interest in the company’s goals, culture, and recent
          developments can make a significant impression on your interviewers.
        </p>
        <ul>
          <li>
            <p>
              <strong>Company background.</strong> Learn about the company’s
              mission, values, culture, products, services, and competitors.
              Check their website, social media, and news articles.
            </p>
          </li>
          <li>
            <p>
              <strong>Recent news.</strong> Stay up to date with recent
              developments or announcements. This will show that you’re
              genuinely interested and knowledgeable.
            </p>
          </li>
          <li>
            <p>
              <strong>Corporate culture.</strong> Understand the company’s work
              culture and the type of people they hire. Websites like Glassdoor
              can help.
            </p>
          </li>
        </ul>
      </div>

      <h2 className={styles.guidelineTitle}>
        3. Practice Common Interview Questions
      </h2>
      <div className={styles.intro}>
        <p>
          Interviews often follow a familiar pattern of questions. Practicing
          your responses to these common questions will help you feel more
          confident and articulate during the interview.
        </p>
        <ul>
          <li>
            <p>
              <strong>Tell me about yourself.</strong> Focus on your
              professional background, skills, and what you bring to the table.
              Check out our{' '}
              <Link to='/' className={styles.redirectLink}>
                Elevator Pitch Guide
              </Link>{' '}
              to make sure you'll keep it short and impressive!
            </p>
          </li>
          <li>
            <p>
              <strong>Why do you want to work here?</strong> Tailor your answer
              to the company’s values, mission, and role you are applying for.
            </p>
          </li>
          <li>
            <p>
              <strong> What are your strengths/weaknesses?</strong> Highlight
              strengths that are relevant to the role. When discussing
              weaknesses, talk about how you are improving them. Check out our{' '}
              <Link to='/' className={styles.redirectLink}>
                Non-Technical Questions Guide
              </Link>{' '}
              to find out why storytelling is one of the keys to a successful
              interview, and more!
            </p>
          </li>
          <li>
            <p>
              <strong>
                Describe a time you solved a problem/conflict at work.
              </strong>{' '}
              Use the STAR method (Situation, Task, Action, Result) to answer
              behavioral questions. Find out more in our{' '}
              <Link to='/' className={styles.redirectLink}>
                Non-Technical Questions Guide
              </Link>
              !
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InterviewGuidelines
