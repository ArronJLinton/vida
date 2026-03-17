import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Index = () => (
  <Main
    fullPage
    description={
      "Arron J. Linton's personal website. New York City based Software Engineer, Solutions Engineer, and Rutgers University Alumni."
    }
  >
    <section className="home" id="home">
      <div className="home__hero">
        <div className="home__copy">
          <div className="home__badge">Available for work</div>
          <h2 className="home__headline">
            Hello, I&apos;m
            <br />
            Arron J. Linton
          </h2>
          <p className="home__subhead">
            I Build Scalable Web, Mobile, and AI Products That Drive Real
            Business Results
          </p>
          <p className="home__meta">
            Full Stack Engineer | React, Node, Go | AI-Powered Systems | Founder
            @ Magistri Dev
          </p>

          <div className="home__cta">
            <Link to="/resume" className="button home__ctaPrimary">
              Download Resume
            </Link>
            <Link to="/projects" className="button home__ctaSecondary">
              View My Work
            </Link>
          </div>

          <div className="home__social">
            <ContactIcons />
          </div>
        </div>

        <div className="home__visual" aria-hidden="true">
          <div className="home__portraitRing">
            <div className="home__portrait">
              <img
                src={`${process.env.PUBLIC_URL}/images/me.jpg`}
                alt=""
                loading="eager"
              />
            </div>
          </div>
          <div className="home__availabilityPill">
            <span className="home__availabilityDot" />
            Available for hire
          </div>
        </div>
      </div>

      <div className="home__stats" aria-label="Highlights">
        <div className="home__stat">
          <div className="home__statValue">10+</div>
          <div className="home__statLabel">Projects</div>
        </div>
        <div className="home__stat">
          <div className="home__statValue">5+</div>
          <div className="home__statLabel">Years Exp</div>
        </div>
        <div className="home__stat">
          <div className="home__statValue">100%</div>
          <div className="home__statLabel">Client Satisfaction</div>
        </div>
      </div>
    </section>
  </Main>
);

export default Index;
