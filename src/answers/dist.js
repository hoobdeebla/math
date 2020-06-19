import React from 'react';
import Latex from 'react-latex';

import PropTypes from 'prop-types';

import Format from '../utils/format';


const Answers = ({ X1, Y1, X2, Y2 }) => (
  <>
    <Latex displayMode>{Format('d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)')}</Latex>

    <Latex displayMode>{Format(`d = sqrt((${X2} - ${X1})^2 + (${Y2} - ${Y1})^2)`)}</Latex>

    <Latex displayMode>{Format(`d = sqrt((${X2 - X1})^2 + (${Y2 - Y1})^2)`)}</Latex>

    <Latex displayMode>{Format(`d = sqrt(${Math.pow((X2 - X1), 2)} + ${Math.pow((Y2 - Y1), 2)})`)}</Latex>

    <Latex displayMode>{Format(`d = sqrt(${Math.pow((X2 - X1), 2) + Math.pow((Y2 - Y1), 2)})`)}</Latex>
    {/* TODO display the simplified radical in addition to the unsimplified one above and the approximate calculation below */}
    <Latex displayMode>{Format(`d approx ${Math.sqrt((Math.pow((X2 - X1), 2) + Math.pow((Y2 - Y1), 2)))}`)}</Latex>
  </>
);

Answers.propTypes = {
  X1: PropTypes.number.isRequired,
  Y1: PropTypes.number.isRequired,
  X2: PropTypes.number.isRequired,
  Y2: PropTypes.number.isRequired,
};

export default Answers;
