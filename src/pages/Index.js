import React from 'react';
import { Link } from 'react-router-dom';

import HomeSocialRow from '../components/Home/HomeSocialRow';
import Main from '../layouts/Main';

const HEADLINE = 'I bridge the gap between technical complexity and business outcomes.';
const HEADLINE_WORDS = HEADLINE.split(' ');

const ROLE_TAGS = [
  'Solutions Engineer',
  'Software Engineer',
  'Founder @ Magistri Dev',
];

const Index = () => (
  <Main
    fullPage
    description={
      "Arron J. Linton's personal website. New York City based Software Engineer, Solutions Engineer, and Rutgers University Alumni."
    }
  >
    <section className="home" id="home">
      <div className="home__hero">
        <div className="home__col home__col--text">
          <h2 className="home__headline">
            {HEADLINE_WORDS.map((word, i) => (
              <span
                key={HEADLINE_WORDS.slice(0, i + 1).join('-')}
                className={`home__word${
                  word.toLowerCase() === 'bridge' ? ' home__word--accent' : ''
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {word}
                {i < HEADLINE_WORDS.length - 1 ? '\u00a0' : ''}
              </span>
            ))}
          </h2>

          <p className="home__sublead">
            Full-stack engineer and solutions architect who turns product vision
            into scalable, AI-powered systems.
          </p>

          <p className="home__roles">{ROLE_TAGS.join(' | ')}</p>

          <div className="home__ctaRow">
            <Link to="/projects" className="home__btn home__btn--primary">
              View My Work
            </Link>
            <a
              href={`${process.env.PUBLIC_URL}/ArronJLinton.pdf`}
              className="home__btn home__btn--secondary"
              download="ArronJLinton.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>

          <HomeSocialRow />
        </div>

        <div className="home__col home__col--visual">
          <span className="home__deco" aria-hidden="true">
            01
          </span>
          <div className="home__hexWrap">
            <div className="home__hexGlow" aria-hidden="true" />
            <div className="home__hexClip">
              <img
                src={`${process.env.PUBLIC_URL}/images/me.jpg`}
                alt="Arron J. Linton"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Main>
);

export default Index;
