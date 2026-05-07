import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about Arron J. Linton's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
        </div>
      </header>
      <section
        className="projects-hero"
        aria-label="Responsive project device previews"
      >
        <h3 className="projects-hero__title">Check Our Latest Projects</h3>
        <p className="projects-hero__subtitle">
          Interfaces crafted to look great on desktop, tablet, and mobile.
        </p>
      </section>

      <section className="projects-grid" aria-label="Projects by device view">
        {data.map((project) => {
          const desktopSrc = project.desktop || project.image;
          const tabletSrc = project.tablet || project.image;
          const mobileSrc = project.mobile || project.image;

          return (
            <div
              key={project.title}
              className="projects-grid__item"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-grid__link"
              >
                <div className="projects-grid__devices">
                  <div className="projects-grid__device projects-grid__device--desktop">
                    <img src={`${process.env.PUBLIC_URL}${desktopSrc}`} alt={`${project.title} desktop view`} />
                  </div>
                  <div className="projects-grid__device projects-grid__device--mobile">
                    <img src={`${process.env.PUBLIC_URL}${mobileSrc}`} alt={`${project.title} mobile view`} />
                  </div>
                  <div className="projects-grid__device projects-grid__device--tablet">
                    <img src={`${process.env.PUBLIC_URL}${tabletSrc}`} alt={`${project.title} tablet view`} />
                  </div>
                </div>
                <h3 className="projects-grid__title">{project.title}</h3>
              </a>
            </div>
          );
        })}
      </section>
    </article>
  </Main>
);

export default Projects;
