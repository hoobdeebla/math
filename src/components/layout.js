import React     from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'gatsby';

import SEO     from '../components/seo';
import NavLink from '../components/nav-link';

const Layout = ({ children, title }) => {
  const Title = title || null;
  return (
    <div>
      <SEO title={Title} />
      <header className='navbar navbar-expand-md navbar-dark bg-dark p-2 p-md-0 mb-3 sticky-top'>
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
      <div className='container'>
        <div className='row'>
          <div className='col-12'>{children}</div>
        </div>
      </div>
      <p className='text-right fixed-bottom px-3'>
        Created by&nbsp;
        <a className='text-reset' href='https://github.com/hoobdeebla'>@hoobdeebla</a>
        &nbsp;and&nbsp;
        <a className='text-reset' href='https://github.com/matttt'>@matttt</a>
      </p>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  title   : PropTypes.string,
};

export default Layout;
