import React     from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'gatsby';

import SEO     from '../components/seo';
import NavLink from '../components/nav-link';

const Layout = ({ children, title, image }) => {
  const classes = 'container rounded-lg';

  const Class = image ? classes + ' text-dark' : classes + ' text-light';
  const Style = image ? { background: `url('${image}')` } : null;
  const Title = title || null;

  return (
    <>
      <SEO title={Title} />
      <header className='navbar navbar-expand-lg navbar-dark bg-dark p-2 p-lg-0 mb-3 sticky-top'>
        <div className='container'>
          <Link to='/' className='navbar-brand mb-0 h1'>Math Toolbelt</Link>
          <div className='float-md-right'>
            <nav id='navbarNav' className='collapse navbar-collapse navbar-nav text-center'>
              <NavLink place='/carb/' text='Carbon Counts' />
              <NavLink place='/dist/' text='Distancer' />
              <NavLink place='/frac/' text='Fraction Multitool' />
              <NavLink place='/pyth/' text='Pythagorifier' />
              <NavLink place='/quad/' text='Quadrifier' />
            </nav>
          </div>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
        </div>
      </header>

      <div className='container text-center'>
        <div className='row'>
          <div className='col'>
            <div className={Class} style={Style}>
              {children}
            </div>
          </div>
        </div>
      </div>

      <footer className='mt-3 float-right'>
        <p className='mr-0 px-2 py-1 bg-dark text-light'>
          Created by&nbsp;
          <a className='text-reset' href='https://github.com/hoobdeebla'>@hoobdeebla</a>
          &nbsp;and&nbsp;
          <a className='text-reset' href='https://github.com/matttt'>@matttt</a>
        </p>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title   : PropTypes.string,
  image   : PropTypes.string,
};

export default Layout;
