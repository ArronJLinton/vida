import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Arron J. Linton</h2>
        <p>
          <a href="mailto:lintonarron@gmail.com">lintonarron@Gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Arron. I am a{' '}
        <a href="https://www.pce.uw.edu/areas-of-study/programming-tech">Lead Instructor at the University of Washington</a>, Software Engineer at 2U, and a Rutgers University Alumni
        <a href="https://www.rutgers.edu/">{}</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Arron J. Linton <Link to="/">arronlinton.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
