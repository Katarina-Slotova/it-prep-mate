import React from "react";
import styles from "./Agencies.module.css";
import LargeCard from "../LargeCard";

function Agencies() {
  const ontario = {
    title: "Ontario Employment Services",
    text: "Government-funded services that provide job search assistance, training, and placement for Ontario residents. Services include job search workshops, resume writing, and access to employment counsellors.",
    link: "https://www.ontario.ca/page/employment-ontario",
    isLink: true,
  };

  const workBC = {
    title: "WorkBC Employment Services",
    text: "Funded by the Government of British Columbia, WorkBC offers job seekers services such as skills training, career planning, job search support, and employment programs for special populations like youth and newcomers.",
    link: "https://www.workbc.ca",
    isLink: true,
  };

  const alberta = {
    title: "Alberta Supports",
    text: "A provincial government-funded service providing support for job seekers in Alberta, including access to training, job search tools, and employment counselling.",
    link: "https://www.alberta.ca/alberta-supports",
    isLink: true,
  };

  const brunswick = {
    title: "Newcomer Employment Services (New Brunswick Multicultural Council)",
    text: "This government-funded service in New Brunswick assists newcomers with job search support, career advice, and connections to employers.",
    link: "https://nbmc-cmnb.ca",
    isLink: true,
  };

  const quebec = {
    title: "Emploi-Québec (Québec)",
    text: "A government agency that helps Quebec residents find jobs, offering job matching, career counselling, and training programs.",
    link: "https://www.quebec.ca/en/employment",
    isLink: true,
  };

  const pei = {
    title: "PEI Association for Newcomers to Canada (PEI ANC)",
    text: "Provides employment services and support to newcomers in Prince Edward Island, funded by federal and provincial governments.",
    link: "https://www.peianc.com",
    isLink: true,
  };
  const acces = {
    title: "ACCES Employment",
    text: "Funded by federal and provincial governments, ACCES Employment helps job seekers, especially newcomers, with programs that offer industry-specific training, mentoring, and job placement.",
    link: "https://accesemployment.ca",
    isLink: true,
  };
  const ywca = {
    title: "YMCA Employment Services",
    text: "Offers various employment programs and services, including job search workshops, resume writing, and interview preparation, supported by federal and provincial governments.",
    link: "https://www.ymca.ca/what-we-offer/employment-services",
    isLink: true,
  };
  const costi = {
    title: "COSTI Immigrant Services",
    text: "Provides employment services to newcomers, funded by the federal and provincial governments. Their services include career counseling, resume workshops, and job placement.",
    link: "https://www.costi.org",
    isLink: true,
  };

  const randstad = {
    title: "Randstad Canada",
    text: "Offers staffing solutions for various sectors including IT, engineering, and finance.",
    link: "https://www.randstad.ca",
    isLink: true,
  };
  const robertHalf = {
    title: "Robert Half",
    text: "Specializes in accounting, finance, administrative, technology, and marketing roles.",
    link: "https://www.roberthalf.ca",
    isLink: true,
  };
  const adecco = {
    title: "Adecco Canada",
    text: "Provides staffing and workforce solutions for various industries.",
    link: "https://www.adecco.ca",
    isLink: true,
  };
  const hays = {
    title: "Hays Canada",
    text: "Focuses on recruitment for IT, engineering, construction, and other technical fields.",
    link: "https://www.hays.ca",
    isLink: true,
  };
  const express = {
    title: "Express Employment Professionals",
    text: "A staffing agency providing recruitment services for administrative, commercial, and professional roles.",
    link: "https://www.expresspros.com",
    isLink: true,
  };
  const talentWorld = {
    title: "Talent World",
    text: "Offers staffing solutions for various industries, including administration, finance, and customer service.",
    link: "https://www.talentworld.com",
    isLink: true,
  };
  const staffingEdge = {
    title: "The Staffing Edge",
    text: "Provides HR outsourcing and staffing services for small and medium-sized businesses.",
    link: "https://www.staffedge.com",
    isLink: true,
  };
  const workforce = {
    title: "Workforce",
    text: "Specialises in connecting job seekers with opportunities in trades and technical fields.",
    link: "https://www.workforce.ca",
    isLink: true,
  };
  const workopolis = {
    title: "Workopolis",
    text: "A job search engine that offers job postings, resume writing tools, and career advice.",
    link: "https://www.workopolis.com",
    isLink: true,
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
          <LargeCard
            title={ontario.title}
            text={ontario.text}
            link={ontario.link}
            isLink={ontario.isLink}
          />
          <LargeCard
            title={workBC.title}
            text={workBC.text}
            link={workBC.link}
            isLink={workBC.isLink}
          />
          <LargeCard
            title={alberta.title}
            text={alberta.text}
            link={alberta.link}
            isLink={alberta.isLink}
          />
        </div>
        <div className={styles.cards}>
          <LargeCard
            title={brunswick.title}
            text={brunswick.text}
            link={brunswick.link}
            isLink={brunswick.isLink}
          />
          <LargeCard
            title={quebec.title}
            text={quebec.text}
            link={quebec.link}
            isLink={quebec.isLink}
          />
          <LargeCard
            title={pei.title}
            text={pei.text}
            link={pei.link}
            isLink={pei.isLink}
          />
        </div>
        <div className={styles.cards}>
          <LargeCard
            title={acces.title}
            text={acces.text}
            link={acces.link}
            isLink={acces.isLink}
          />
          <LargeCard
            title={ywca.title}
            text={ywca.text}
            link={ywca.link}
            isLink={ywca.isLink}
          />
          <LargeCard
            title={costi.title}
            text={costi.text}
            link={costi.link}
            isLink={costi.isLink}
          />
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
          <LargeCard
            title={randstad.title}
            text={randstad.text}
            link={randstad.link}
            isLink={randstad.isLink}
          />
          <LargeCard
            title={robertHalf.title}
            text={robertHalf.text}
            link={robertHalf.link}
            isLink={robertHalf.isLink}
          />
          <LargeCard
            title={adecco.title}
            text={adecco.text}
            link={adecco.link}
            isLink={adecco.isLink}
          />
        </div>
        <div className={styles.cards}>
          <LargeCard
            title={hays.title}
            text={hays.text}
            link={hays.link}
            isLink={hays.isLink}
          />
          <LargeCard
            title={express.title}
            text={express.text}
            link={express.link}
            isLink={express.isLink}
          />
          <LargeCard
            title={talentWorld.title}
            text={talentWorld.text}
            link={talentWorld.link}
            isLink={talentWorld.isLink}
          />
        </div>
        <div className={styles.cards}>
          <LargeCard
            title={staffingEdge.title}
            text={staffingEdge.text}
            link={staffingEdge.link}
            isLink={staffingEdge.isLink}
          />
          <LargeCard
            title={workforce.title}
            text={workforce.text}
            link={workforce.link}
            isLink={workforce.isLink}
          />
          <LargeCard
            title={workopolis.title}
            text={workopolis.text}
            link={workopolis.link}
            isLink={workopolis.isLink}
          />
        </div>
      </div>
    </div>
  );
}

export default Agencies;
