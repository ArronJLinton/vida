import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

const RESUME_PDF = `${process.env.PUBLIC_URL}/ArronJLinton.pdf`;

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Arron J. Linton's resume: senior software engineer and solutions engineer with experience at Magistri Dev, The Creative Bomb, 2U, University of Washington, Verizon, and TEKsystems."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="/resume">Resume</Link>
          </h2>
          <p className="resume-pdf-download">
            <a
              href={RESUME_PDF}
              download="ArronJLinton.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Download PDF resume
            </a>
          </p>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
