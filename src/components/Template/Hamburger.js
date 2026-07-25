import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  const drawer = typeof document !== 'undefined'
    ? createPortal(
      <>
        <div
          className={`site-mobile-nav__backdrop${open ? ' is-visible' : ''}`}
          aria-hidden="true"
          onClick={close}
        />
        <nav
          id="site-mobile-nav-panel"
          className={`site-mobile-nav__panel${open ? ' is-open' : ''}`}
          aria-hidden={!open}
        >
          <ul className="site-mobile-nav__list">
            {routes.map((route) => (
              <li key={route.label}>
                <Link to={route.path} onClick={close}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </>,
      document.body,
    )
    : null;

  return (
    <div className="site-mobile-nav">
      <button
        type="button"
        className="site-mobile-nav__toggle"
        aria-expanded={open}
        aria-controls="site-mobile-nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={toggle}
      >
        {open ? '\u2715' : '\u2630'}
      </button>
      {drawer}
    </div>
  );
};

export default Hamburger;
