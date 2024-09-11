import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Arron J. Linton via email @ hi@mldangelo.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
          <p>Whether you want to get in touch,
            talk about a project collaboration,
            or just say hi, I&apos;d love to hear from you.
          </p>
        </div>
      </header>
      <div className="email-at">
        <p>You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
