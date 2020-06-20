import React     from 'react';
import PropTypes from 'prop-types';

import Mult from './frac/mult';
import Add  from './frac/add';
import Sub  from './frac/sub';


const Answers = ({ op, nums }) => {
  switch (op) {
    case '*':
      return <Mult nums={nums} />;
    case '+':
      return <Add  nums={nums} />;
    case '-':
      return <Sub  nums={nums} />;
    default:
      return <Mult nums={nums} />;
  }
};

Answers.propTypes = {
  op  : PropTypes.string.isRequired,
  nums: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Answers;
