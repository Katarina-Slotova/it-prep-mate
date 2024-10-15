import React from 'react'
import * as styles from './InterviewGuidelines.module.css'
import Navbar from '../Navbar'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function InterviewGuidelines() {
  return (
    <div>
      <h1 className={styles.title}>General Interview Guidelines</h1>
      <div className={styles.intro}>{/* <p>SOME INTRO TEXT? IMAGE?</p> */}</div>
      <h2 className={styles.guidelineTitle}>
        1. Understanding the Job Description
      </h2>
      <div className={styles.intro}>
        <p>
          Before heading into any interview, it's crucial to grasp the
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
          Showing genuine interest in the company's goals, culture, and recent
          developments can make a significant impression on your interviewers.
        </p>
        <ul>
          <li>
            <p>
              <strong>Company background.</strong> Learn about the company's
              mission, values, culture, products, services, and competitors.
              Check their website, social media, and news articles.
            </p>
          </li>
          <li>
            <p>
              <strong>Recent news.</strong> Stay up to date with recent
              developments or announcements. This will show that you're
              genuinely interested and knowledgeable.
            </p>
          </li>
          <li>
            <p>
              <strong>Corporate culture.</strong> Understand the company's work
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
              <Link to='/underconstruction' className={styles.redirectLink}>
                Elevator Pitch Guide
              </Link>{' '}
              to make sure you'll keep it short and impressive!
            </p>
          </li>
          <li>
            <p>
              <strong>Why do you want to work here?</strong> Tailor your answer
              to the company's values, mission, and role you are applying for.
            </p>
          </li>
          <li>
            <p>
              <strong> What are your strengths/weaknesses?</strong> Highlight
              strengths that are relevant to the role. When discussing
              weaknesses, talk about how you are improving them. Check out our{' '}
              <Link to='/underconstruction' className={styles.redirectLink}>
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
              <Link to='/underconstruction' className={styles.redirectLink}>
                Non-Technical Questions Guide
              </Link>
              !
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        4. Prepare Questions for the Interviewer
      </h2>
      <div className={styles.intro}>
        <p>
          Asking thoughtful questions not only shows that you did your research
          and that you are genuinely interested in the company, but also helps
          you determine if the company is the right fit for you. Interview is
          always a two-way process — not only the interviewer is assessing if
          you're the right fit for the company, but you're also assessing them.
          Here are some example questions you can ask:
        </p>
        <ul>
          <li>
            <p>
              How does this role contribute to the company’s long-term goals?
            </p>
          </li>
          <li>
            <p>Can you describe the team I'll be working with?</p>
          </li>
          <li>
            <p>What is the company culture like?</p>
          </li>
          <li>
            <p>What are the next steps in the hiring process?</p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        5. Highlight Your Skills & Achievements
      </h2>
      <div className={styles.intro}>
        <p>
          The interview is an opportunity to show the value you bring. Use
          specific examples to bring your relevant skills and accomplishments
          into the spotlight. Make sure they align with the job description.
        </p>
        <ul>
          <li>
            <p>
              <strong>Prepare examples.</strong> Be ready to talk about specific
              situations, projects or tasks where you made a significant impact.
              Be sure to check out our{' '}
              <Link to='/underconstruction' className={styles.redirectLink}>
                Non-Technical Questions Guide
              </Link>{' '}
              to learn why being a great storyteller matters and what resources
              you can use to become one!
            </p>
          </li>
          <li>
            <p>
              <strong>Quantify your achievements.</strong> Use numbers to
              highlight your success. For example, “I increased sales by 20% in
              six months” or “I led a team of 5 developers to complete the
              project 2 weeks ahead of schedule.”
            </p>
          </li>
          <li>
            <p>
              <strong>Prepare for technical or role-specific questions.</strong>{' '}
              If you're wondering what questions interviewers might ask, check
              out our{' '}
              <Link to='/underconstruction' className={styles.redirectLink}>
                Technical Questions Guide
              </Link>{' '}
              to see some examples!
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>6. Polish Your Elevator Pitch</h2>
      <div className={styles.intro}>
        <p>
          Your elevator pitch is your professional story in a nutshell. It's a
          brief introduction that highlights your background, expertise, and
          what makes you a great fit for the role.
        </p>
        <ul>
          <li>
            <p>
              Create a brief, compelling summary of who you are, your
              background, and why you're an ideal fit for the role. This is
              usually your response to “Tell me about yourself.” We have an
              entire{' '}
              <Link to='/underconstruction' className={styles.redirectLink}>
                Elevator Pitch Guide
              </Link>{' '}
              that will help you nail this question!
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>7. Do Mock Interviews</h2>
      <div className={styles.intro}>
        <p>
          Practice makes perfect. Conducting mock interviews helps you get
          comfortable with the interview setting, refine your answers, and boost
          your confidence.
        </p>
        <ul>
          <li>
            <p>
              <strong>Mock interviews.</strong> Practice answering questions out
              loud with a friend, mentor, or even in front of a mirror. It will
              help with confidence and timing.
            </p>
          </li>
          <li>
            <p>
              <strong>Record yourself.</strong> Hearing your answers or watching
              yourself can help you identify areas for improvement.
            </p>
          </li>
          <li>
            <p>
              <strong>Ready to take your prep one step further?</strong> We are
              getting ready to add a mentoring option to our platform. You'll be
              able to pair up with a suitable mentor, who can help you with mock
              interviews and much more! Stay tuned!
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>8. Dress For The Job You Want</h2>
      <div className={styles.intro}>
        <p>
          Your appearance makes the first impression. Dressing appropriately for
          the company's culture demonstrates professionalism and respect for the
          interview process.
        </p>
        <ul>
          <li>
            <p>
              <strong>Research the company dress code.</strong> If it's a formal
              company, dress in professional business attire. If it's a startup
              or tech company, business casual might be appropriate. Always err
              on the side of being slightly more formal.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>9. Bring All The Essentials</h2>
      <div className={styles.intro}>
        <p>
          Preparation is key to a smooth interview. Make sure you bring all
          necessary materials, such as copies of your resume, a portfolio, if
          applicable, a notebook, and a pen.
        </p>
        <ul>
          <li>
            <p>
              <strong>Several copies of your resume.</strong> Even if they
              already have it, bring at least a couple of extra copies in case
              multiple interviewers are present.
            </p>
          </li>
          <li>
            <p>
              <strong>Portfolio or work samples.</strong> For example, if you're
              applying for a creative position, bring a portfolio of your work.
            </p>
          </li>
          <li>
            <p>
              <strong> Notebook and pen.</strong> You'll want to take notes
              during the interview.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>10. The Day Before The "D" Day</h2>
      <div className={styles.intro}>
        <p>
          There are a few last-minute details to cover the day before your
          interview.
        </p>
        <ul>
          <li>
            <p>
              <strong>Time and location.</strong> Make sure you know how to get
              to the interview location and plan to arrive at least 10 minutes
              early.
            </p>
          </li>
          <li>
            <p>
              <strong>A good night's sleep.</strong> Being well-rested will help
              you stay alert, more relaxed and focused during the interview.
            </p>
          </li>
          <li>
            <p>
              <strong>Be positive and confident.</strong> A positive mindset and
              confidence in your abilities will reflect in your demeanor during
              the interview.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        11. Follow-Up After the Interview
      </h2>
      <div className={styles.intro}>
        <p>
          Sending a thank-you note can leave a lasting positive impression and
          reinforce your interest in the role.
        </p>
        <ul>
          <li>
            <p>
              <strong>Send a thank-you email.</strong> Send a personalized
              thank-you email within 24 hours. Emphasize your interest in the
              role and mention something specific from the interview.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.introText}>
        <p className={styles.signature}>
          ~ Best of luck! You've got this & we're cheering you on! ~
        </p>
      </div>
      <div className={styles.posArrow}>
        <Link to='/interviewguide' className={styles.redirectLink}>
          <FaArrowLeft className={styles.arrow} />{' '}
          <strong>Go back to Interview Guide main page</strong>
        </Link>
      </div>
    </div>
  )
}

export default InterviewGuidelines
