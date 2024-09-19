import React from 'react'
import * as styles from './Networking.module.css'
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
              <Link to='/underconstruction' className={styles.redirectLink}>
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
              <strong>Use an icebreaker.</strong> Ice breakers help break down
              initial barriers, ease tension, and get conversations flowing more
              naturally. Simple, lighthearted ice breakers can make the
              environment feel more welcoming. Try something like "What brings
              you here?", "Have you been to events like this before?" or "I’m
              new to the area, do you have any recommendations for must-visit
              places or things to do?".
            </p>
          </li>
          <li>
            <p>
              <strong>Research the event format.</strong> Make sure to know if
              it's formal or casual so you can prepare accordingly.
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
      <h2 className={styles.guidelineTitle}>5. Engage in Conversations</h2>
      <div className={styles.intro}>
        <p>
          The goal of networking is to build lasting, meaningful relationships.
          Focus on quality over quantity - make genuine connections rather than
          just collect contacts. Take the time to engage in conversations and
          learn about others.
        </p>
        <ul>
          <li>
            <p>
              <strong>Ask open-ended questions.</strong> This encourages deeper
              discussions and helps you learn about the experiences of others.
              Show interest in others by encouraging them to share more about
              their work, interests, and insights.
            </p>
          </li>
          <li>
            <p>
              <strong>Share your story.</strong> Don't be shy about sharing your
              background and what brought you to Canada.
            </p>
          </li>
          <li>
            <p>
              <strong>Be an active listener.</strong> Show interest in what the
              other person has to say, and listen more than you speak. This
              helps to build rapport.
            </p>
          </li>
          <li>
            <p>
              <strong>Offer value.</strong> Think about how you can help or
              provide value to the person you're speaking with, whether it's by
              sharing insights or making introductions.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>6. Follow Up After Networking</h2>
      <div className={styles.intro}>
        <p>
          The follow-up is crucial to maintaining your new connections. Reach
          out to people shortly after meeting them to make sure they remember
          you and solidify the relationship.
        </p>
        <ul>
          <li>
            <p>
              <strong>Send a thank-you message.</strong> Send a short email or
              LinkedIn message thanking the person for their time and expressing
              your interest in staying connected. You should do this ideally
              within 24 hours.
            </p>
          </li>
          <li>
            <p>
              <strong>Personalize your message.</strong> Mention something
              specific from your conversation to show that you were actively
              listening to what they were saying. This will make your follow-up
              more memorable.
            </p>
          </li>
          <li>
            <p>
              <strong>Stay in touch.</strong> Regularly check in with your
              contacts to maintain relationships, whether by sharing relevant
              content, updates, or just saying hello.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        7. Maintain and Grow Your Network
      </h2>
      <div className={styles.intro}>
        <p>
          Networking is an ongoing process. It doesn't stop after one event.
          Continue nurturing your professional relationships and building new
          ones.
        </p>
        <ul>
          <li>
            <p>
              <strong>Be consistent.</strong> Set aside time regularly to engage
              with your network. You can do this through attending events,
              commenting on posts, or sending a quick message.
            </p>
          </li>
          <li>
            <p>
              <strong>Offer help.</strong> Networking is a two-way street. Look
              for opportunities to assist your contacts when you can. You can do
              this by providing information or connecting them to someone in
              your network.
            </p>
          </li>
          <li>
            <p>
              <strong>Be proactive.</strong> Attend events regularly and look
              for opportunities to meet new people.
            </p>
          </li>
          <li>
            <p>
              <strong>Engage on social media.</strong> Share insights, articles,
              and updates on platforms like LinkedIn to stay active in your
              network.
            </p>
          </li>
          <li>
            <p>
              <strong>Diversify your network.</strong> Connect with people from
              various industries and backgrounds to broaden your horizons.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        8. Utilize LinkedIn for Networking as a Newcomer
      </h2>
      <div className={styles.intro}>
        <p>
          LinkedIn is one of the most valuable tools for professional networking
          and can be an invaluable tool for newcomers. How can you make the most
          of it?
        </p>
        <ul>
          <li>
            <p>
              <strong>Optimize your profile.</strong> Make sure your profile is
              complete, up-to-date, shows a professional photo, has a short and
              engaging headline, and a clear summary of your career goals and
              skills. Feel free to include your new goals you set for yourself
              after moving to Canada.
            </p>
          </li>
          <li>
            <p>
              <strong>Connect with purpose.</strong> Reach out to professionals
              in your industry or newcomers you meet. When sending connection
              requests, add a note and personalize it by introducing yourself
              and explaining why you want to connect. People are more likely to
              connect when you let them why you want to connect.
            </p>
          </li>
          <li>
            <p>
              <strong>Engage with content.</strong> Share articles and comment
              on posts to stay active in your network and remain visible.
            </p>
          </li>
          <li>
            <p>
              <strong>Join groups.</strong> Participate in LinkedIn groups for
              newcomers or industry-specific networks to meet like-minded
              professionals, where you can engage and find support.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>9. Networking Etiquette</h2>
      <div className={styles.intro}>
        <p>
          To build a strong network, it's important to follow good etiquette.
          Being polite, professional, and respectful will leave a positive
          impression.
        </p>
        <ul>
          <li>
            <p>
              <strong>Be respectful of people's time.</strong> Whether online or
              in-person, don't monopolize conversations or contacts.
            </p>
          </li>
          <li>
            <p>
              <strong>Offer before asking.</strong> Aim to provide value before
              you ask for a favor.
            </p>
          </li>
          <li>
            <p>
              <strong>Be authentic.</strong> People appreciate sincerity. Be
              genuine in your conversations and follow-ups.
            </p>
          </li>
          <li>
            <p>
              <strong>Say thank you.</strong> Always express gratitude to those
              who help or connect with you.
            </p>
          </li>
        </ul>
      </div>
      <h2 className={styles.guidelineTitle}>
        10. Quick Tips Summary for Networking Success as a Newcomer
      </h2>
      <div className={styles.intro}>
        <ul>
          <li>
            <p>Stay open-minded and approachable.</p>
          </li>
          <li>
            <p>
              Be comfortable in being uncomfortable - don't hesitate to take
              initiative, approach people and introduce yourself.
            </p>
          </li>
          <li>
            <p>Show curiosity about others' experiences.</p>
          </li>
          <li>
            <p>Follow up and keep in touch regularly.</p>
          </li>
          <li>
            <p>Embrace the learning experience!</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Networking
