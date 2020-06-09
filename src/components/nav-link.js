import React     from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'gatsby';

const NavLink = ({ place, text }) => (
  <Link
    className='nav-item nav-link p-3'
    activeClassName='active'
    to={place}
  >
    {text}
  </Link>
);

NavLink.propTypes = {
  place: PropTypes.string,
  text : PropTypes.string,
};

export default NavLink;
