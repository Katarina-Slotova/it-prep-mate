import React from 'react'
import styles from './Networking.module.css'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function Networking() {
  return (
    <div>
      <h1 className={styles.title}>Networking</h1>

      <div className={styles.intro}>
        <p>
          Let's face it — networking can seem a bit intimidating. And
          understandably so! Walking into a room full of strangers, not sure
          where to start, how to approach new connections online, what to say.
          Who wouldn't get nervous? Yes, we've all been there... But trust us,
          it gets easier. A little bit of preparation and the right mindset goes
          a long way when it comes to networking. Think of it as just having
          conversations with people who share your interests. The more you do
          it, the more natural it becomes.
        </p>
        <p>
          Whether you're meeting people at an event or connecting online,
          building meaningful relationships with professionals in the tech field
          is key to career growth. This guide will give you some easy tips to
          boost your confidence, make networking less scary and more rewarding,
          so you can turn those connections into real opportunities. No
          pressure, just take it one step at a time. You've got this!
        </p>
      </div>

      <h2 className={styles.guidelineTitle}>
        1. Define Your Networking Goals as a Newcomer
      </h2>
      <div className={styles.intro}>
        <p>
          Before you begin, take a moment to think about what you want to
          achieve through networking in your new environment. Whether you're
          looking for job opportunities, connecting with industry leaders,
          seeking mentorship, or simply wanting to connect with others in your
          field, having clear goals can guide your approach and help you network
          more effectively.
        </p>
        <ul>
          <li>
            <p>
              <strong>Set specific targets.</strong> Decide who you want to
              connect with and why. Consider professionals in your industry,
              local groups, or even fellow newcomers.
            </p>
          </li>
          <li>
            <p>
              <strong>Identify platforms.</strong> Determine where you'll
              network (online, in-person events, LinkedIn, etc.).
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        2. Craft an Effective Elevator Pitch for a New Audience
      </h2>
      <div className={styles.intro}>
        <p>
          When you meet new people, a well-prepared, concise and engaging
          elevator pitch is essential for making a great first impression. It
          should briefly cover who you are, your background, what you're hoping
          to achieve in your new environment, and what you're looking for in a
          networking context.
        </p>
        <ul>
          <li>
            <p>
              <strong>Keep it short.</strong> Aim for 30 seconds to 1 minute.
            </p>
          </li>
          <li>
            <p>
              <strong>Keep it relevant.</strong> Mention your previous
              experiences and how they relate to your goals in Canada.
            </p>
          </li>
          <li>
            <p>
              <strong>Tailor it to your audience.</strong> Make sure your pitch
              aligns with the person or event.
            </p>
          </li>
          <li>
            <p>
              <strong>Be clear and confident.</strong> Communicate your value
              and goals confidently.
            </p>
          </li>
          <li>
            <p>
              <strong>Be open about your newcomer status.</strong> People
              appreciate authenticity. Don't hesitate to share that you're new
              and eager to connect.
            </p>
          </li>
          <li>
            <p>
              <strong>Want to know more? </strong>
              Check out our{' '}
              <Link to='/' className={styles.redirectLink}>
                Elevator Pitch Guide
              </Link>{' '}
              to find out more on how to keep your elevator pitch short and
              impressive!
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        3. Find Networking Opportunities
      </h2>
      <div className={styles.intro}>
        <p>
          The key to effective networking is finding the right opportunities.
          Here are some great places to start building your network:
        </p>
        <ul>
          <li>
            <p>
              <strong>Local newcomer organizations.</strong> Many cities have
              groups focused on helping newcomers connect and integrate into the
              community.
            </p>
          </li>
          <li>
            <p>
              <strong>Cultural events and festivals.</strong> Attend local
              events to meet people and immerse yourself in the culture.
            </p>
          </li>
          <li>
            <p>
              <strong>Professional conferences and events.</strong> Attend
              industry-specific events, meetups, or workshops to connect with
              like-minded professionals.
            </p>
          </li>
          <li>
            <p>
              <strong>Online platforms.</strong> Use LinkedIn and other social
              media platforms to find and connect with people in your field.
            </p>
          </li>
          <li>
            <p>
              <strong>Community groups and professional associations.</strong>{' '}
              Joining industry-groups aligned with your career interests can
              open doors to new contacts and opportunities. They occasionally
              host event and meetups.
            </p>
          </li>
          <li>
            <p>
              <strong>Company networking events.</strong> Take advantage of
              public events hosted by the companies you're interested in.
            </p>
          </li>
          <li>
            <p>
              <strong>
                Don't know where to start? Here are some suggestions.
              </strong>{' '}
              Try{' '}
              <a href='https://www.meetup.com/' className={styles.redirectLink}>
                Meetup
              </a>{' '}
              or{' '}
              <a
                href='https://www.eventbrite.ca/d/canada/job-fairs/'
                className={styles.redirectLink}
              >
                Eventbrite
              </a>
              . Find your local{' '}
              <a
                href='https://www.jobbank.gc.ca/findajob/employment-centres'
                className={styles.redirectLink}
              >
                {' '}
                employment centers
              </a>{' '}
              and subscribe to their newsletters, where you can find information
              about their upcoming events, including job fairs.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        4. Prepare for Networking Events
      </h2>
      <div className={styles.intro}>
        <p>
          Just like preparing for an interview, it's important to be ready for
          networking events. Know who will be there, understand the key topics
          being discussed, and plan your approach. Keep in mind that cultural
          norms may vary. Familiarize yourself with local etiquette and customs
          to feel more comfortable.
        </p>
        <ul>
          <li>
            <p>
              <strong>Research attendees.</strong> Look up speakers,
              participants, or potential contacts in advance.
            </p>
          </li>
          <li>
            <p>
              <strong>Prepare questions.</strong> Have a few open-ended
              questions ready to spark conversation.
            </p>
          </li>
          <li>
            <p>
              <strong>Practice small talk.</strong> Having a few conversation
              starters can help break the ice, especially if you're still
              learning about the local culture.
            </p>
          </li>
          <li>
            <p>
              <strong>Research the event format.</strong> Understand if it's
              formal or casual so you can prepare accordingly.
            </p>
          </li>
          <li>
            <p>
              <strong>Dress appropriately.</strong> Whether the event is formal
              or casual, make sure you look the part.
            </p>
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
              <Link to='/' className={styles.redirectLink}>
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
              <Link to='/' className={styles.redirectLink}>
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
              <Link to='/' className={styles.redirectLink}>
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
    </div>
  )
}

export default Networking
