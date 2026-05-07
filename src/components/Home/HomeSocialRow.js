import React from 'react';

const iconStyle = { width: 18, height: 18, display: 'block' };

const basePath = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
const siteHref = basePath ? `${basePath}/` : '/';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={iconStyle}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={iconStyle}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={iconStyle}>
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.24 6.99 1.738 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.292 4-.82zm-11.62-2.58c.45-1.095 1.774-3.444 5.577-5.657.09-.06.18-.118.27-.175-1.717-3.48-2.578-5.92-2.824-6.55-2.802 1.92-4.88 4.83-5.024 8.38zM12 0C5.385 0 0 5.385 0 12c.09-.05.555-.35 1.11-.65.002-.105.008-.21.008-.32 0-1.278.248-2.5.696-3.62C2.735 3.93 6.555 1.2 12 1.2c1.305 0 2.558.178 3.75.51-.45 1.26-1.28 3.1-2.94 5.08 1.92.06 3.84-.06 5.76-.48C17.82 3.99 15.3 0 12 0zm8.52 15.9c.292-1.002.46-2.06.46-3.15 0-.615-.045-1.215-.135-1.8-3.015.75-6.09.9-8.07.75-.24.48-.48.96-.75 1.44 2.94 1.02 6.09 1.65 8.49 2.76z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={iconStyle}>
    <path d="M0 4v16h24V4H0zm21.518 2L12 12.713 2.482 6h19.036zM2 7.869l9.649 6.174L2 19.434V7.869zm2.518 12L12 14.287 19.482 20H4.518zm17.964-1.566L12.351 14.043 22 7.869v11.565z" />
  </svg>
);

const HomeSocialRow = () => (
  <div className="home__socialRow">
    <div className="home__socialRow__divider" aria-hidden="true" />
    <div className="home__socialRow__icons">
      <a
        href="https://github.com/ArronJLinton"
        target="_blank"
        rel="noopener noreferrer"
        className="home__socialIcon"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/arron-j-linton-97393633/"
        target="_blank"
        rel="noopener noreferrer"
        className="home__socialIcon"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a
        href={siteHref}
        className="home__socialIcon"
        aria-label="Personal site"
      >
        <DribbbleIcon />
      </a>
      <a
        href="mailto:lintonarron@gmail.com"
        className="home__socialIcon"
        aria-label="Email"
      >
        <EmailIcon />
      </a>
    </div>
  </div>
);

export default HomeSocialRow;
