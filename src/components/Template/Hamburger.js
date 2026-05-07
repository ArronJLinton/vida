import React, { Suspense, lazy, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = ({ menuClassName = undefined }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu
          right
          isOpen={open}
          menuClassName={menuClassName}
          styles={{
            bmMenu: {
              top: '3.5em',
              height: 'calc(100% - 3.5em)',
              width: 'min(100%, 22rem)',
            },
          }}
        >
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index ? 'index-li' : undefined}>{l.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

Hamburger.propTypes = {
  menuClassName: PropTypes.string,
};

Hamburger.defaultProps = {
  menuClassName: undefined,
};

export default Hamburger;
