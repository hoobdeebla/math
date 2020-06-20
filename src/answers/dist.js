import React from 'react';
import LTX   from '../components/latex';
import Round from '../utils/round';

import PropTypes from 'prop-types';


const Answers = ({ X1, Y1, X2, Y2 }) => (
  <>
    <LTX block>d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)</LTX>

    <LTX block>{`d = sqrt((${X2} - ${X1})^2 + (${Y2} - ${Y1})^2)`}</LTX>

    <LTX block>{`d = sqrt((${X2 - X1})^2 + (${Y2 - Y1})^2)`}</LTX>

    <LTX block>{`d = sqrt(${Math.pow((X2 - X1), 2)} + ${Math.pow((Y2 - Y1), 2)})`}</LTX>

    <LTX block>{`d = sqrt(${Math.pow((X2 - X1), 2) + Math.pow((Y2 - Y1), 2)})`}</LTX>
    {/* TODO display the simplified radical in addition to the unsimplified one above and the approximate calculation below */}
    <LTX block>{`d approx ${Round(Math.sqrt(Math.pow((X2 - X1), 2) + Math.pow((Y2 - Y1), 2)), 2)}`}</LTX>
  </>
);

Answers.propTypes = {
  X1: PropTypes.number.isRequired,
  Y1: PropTypes.number.isRequired,
  X2: PropTypes.number.isRequired,
  Y2: PropTypes.number.isRequired,
};

export default Answers;
