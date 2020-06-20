import React  from 'react';
import Latex  from 'react-latex';
import Format from '../utils/format';

import PropTypes from 'prop-types';


const LatexWrapper = ({ block, children }) => (
  // sets {display: block} if true, otherwise displayed inline
  <Latex displayMode={block}>
    {Format(children)}
  </Latex>
);

LatexWrapper.propTypes = {
  block   : PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default LatexWrapper;
