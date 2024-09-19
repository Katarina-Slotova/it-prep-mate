import React from "react";
import styles from "./Agencies.module.css";
import LargeCard from "../LargeCard";

function Agencies() {
  const ontario = {
    title: "Ontario Employment Services",
    text: "Government-funded services that provide job search assistance, training, and placement for Ontario residents. Services include job search workshops, resume writing, and access to employment counsellors.",
  };

  const workBC = {
    title: "WorkBC Employment Services",
    text: "Funded by the Government of British Columbia, WorkBC offers job seekers services such as skills training, career planning, job search support, and employment programs for special populations like youth and newcomers.",
  };

  const alberta = {
    title: "Alberta Supports",
    text: "A provincial government-funded service providing support for job seekers in Alberta, including access to training, job search tools, and employment counselling.",
  };

  const brunswick = {
    title: "Newcomer Employment Services (New Brunswick Multicultural Council)",
    text: "This government-funded service in New Brunswick assists newcomers with job search support, career advice, and connections to employers.",
  };

  const quebec = {
    title: "Emploi-Québec (Québec)",
    text: "A government agency that helps Quebec residents find jobs, offering job matching, career counselling, and training programs.",
  };

  const pei = {
    title: "PEI Association for Newcomers to Canada (PEI ANC)",
    text: "Provides employment services and support to newcomers in Prince Edward Island, funded by federal and provincial governments.",
  };
  const acces = {
    title: "ACCES Employment",
    text: "Funded by federal and provincial governments, ACCES Employment helps job seekers, especially newcomers, with programs that offer industry-specific training, mentoring, and job placement.",
  };
  const ywca = {
    title: "YMCA Employment Services",
    text: "Offers various employment programs and services, including job search workshops, resume writing, and interview preparation, supported by federal and provincial governments.",
  };
  const costi = {
    title: "COSTI Immigrant Services",
    text: "Provides employment services to newcomers, funded by the federal and provincial governments. Their services include career counseling, resume workshops, and job placement.",
  };

  const randstad = {
    title: "Randstad Canada",
    text: "Offers staffing solutions for various sectors including IT, engineering, and finance.",
  };
  const robertHalf = {
    title: "Robert Half",
    text: "Specializes in accounting, finance, administrative, technology, and marketing roles.",
  };
  const adecco = {
    title: "Adecco Canada",
    text: "Provides staffing and workforce solutions for various industries.",
  };
  const hays = {
    title: "Hays Canada",
    text: "Focuses on recruitment for IT, engineering, construction, and other technical fields.",
  };
  const express = {
    title: "Express Employment Professionals",
    text: "A staffing agency providing recruitment services for administrative, commercial, and professional roles.",
  };
  const talentWorld = {
    title: "Talent World",
    text: "Offers staffing solutions for various industries, including administration, finance, and customer service.",
  };
  const staffingEdge = {
    title: "The Staffing Edge",
    text: "Provides HR outsourcing and staffing services for small and medium-sized businesses.",
  };
  const workforce = {
    title: "Workforce",
    text: "Specialises in connecting job seekers with opportunities in trades and technical fields.",
  };
  const workopolis = {
    title: "Workopolis",
    text: "A job search engine that offers job postings, resume writing tools, and career advice.",
  };

  return (
    <div>
      <h1 className={styles.title}>Agencies</h1>
      <div className={styles.intro}>
        <h2 className={styles.subheading} style={{ textAlign: "left" }}>
          Government Funded Employment Agencies
        </h2>
        <p>
          Government-funded employment agencies in Canada provide free
          employment services to help job seekers, including immigrants, youth,
          and people facing barriers to employment, connect with job
          opportunities and develop their careers. These agencies are funded
          either by federal or provincial governments and offer various
          programs, such as job search assistance, skills training, career
          counselling, and support for specific populations (e.g., newcomers,
          people with disabilities).
        </p>
        <h3>How to Access Government-Funded Employment Services</h3>
        <ul>
          <li>
            <p>
              <strong>Visit Official Websites:</strong> Start by exploring the
              websites of the agencies listed below to understand the specific
              services they offer and eligibility criteria.
            </p>
          </li>
          <li>
            <p>
              <strong>Register Online: </strong> Many agencies require you to
              create an account or register online to access job listings and
              personalised services.
            </p>
          </li>
          <li>
            <p>
              <strong>Attend Workshops and Seminars: </strong> Participate in
              workshops, webinars, and seminars offered by these agencies to
              enhance your job search skills.
            </p>
          </li>
          <li>
            <p>
              <strong>Consult Career Counsellors: </strong> Schedule
              appointments with career counsellors available through these
              agencies for personalised guidance.
            </p>
          </li>
          <li>
            <p>
              <strong>Utilise Local Offices: </strong> Some services may be
              available through local offices or community centres. Check the
              agency’s website for location-specific information.
            </p>
          </li>
        </ul>

        <div className={styles.cards}>
          <LargeCard title={ontario.title} text={ontario.text} />
          <LargeCard title={workBC.title} text={workBC.text} />
          <LargeCard title={alberta.title} text={alberta.text} />
        </div>
        <div className={styles.cards}>
          <LargeCard title={brunswick.title} text={brunswick.text} />
          <LargeCard title={quebec.title} text={quebec.text} />
          <LargeCard title={pei.title} text={pei.text} />
        </div>
        <div className={styles.cards}>
          <LargeCard title={acces.title} text={acces.text} />
          <LargeCard title={ywca.title} text={ywca.text} />
          <LargeCard title={costi.title} text={costi.text} />
        </div>

        <h2 className={styles.subheading} style={{ textAlign: "left" }}>
          Private Employment Agencies:
        </h2>
        <p>
          Private Canadian employment agencies are businesses that offer job
          placement and recruitment services to both employers and job seekers.
          Unlike government-funded agencies, these private agencies typically
          operate on a for-profit basis and provide a wide range of specialized
          services.
        </p>

        <div className={styles.cards}>
          <LargeCard title={randstad.title} text={randstad.text} />
          <LargeCard title={robertHalf.title} text={robertHalf.text} />
          <LargeCard title={adecco.title} text={adecco.text} />
        </div>
        <div className={styles.cards}>
          <LargeCard title={hays.title} text={hays.text} />
          <LargeCard title={express.title} text={express.text} />
          <LargeCard title={talentWorld.title} text={talentWorld.text} />
        </div>
        <div className={styles.cards}>
          <LargeCard title={staffingEdge.title} text={staffingEdge.text} />
          <LargeCard title={workforce.title} text={workforce.text} />
          <LargeCard title={workopolis.title} text={workopolis.text} />
        </div>
      </div>
    </div>
  );
}

export default Agencies;
