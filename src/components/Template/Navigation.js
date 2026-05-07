import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header" className="site-header">
    <h1 className="index-link site-header__brand">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} to={l.path}>
            {l.label}
          </Link>
        ))}
    </h1>
    <div className="site-header__right">
      <span className="site-header__badge">
        <span className="site-header__badgeDot" aria-hidden="true" />
        Open to opportunities
      </span>
      <nav className="links site-header__nav">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <Hamburger menuClassName="site-hamburger-drawer" />
    </div>
  </header>
);

export default Navigation;
