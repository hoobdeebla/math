import React from 'react';
import LTX   from '../components/latex';
import Round from '../utils/round';

import PropTypes from 'prop-types';


const Answers = ({ a, b, c }) => (
  <>
    <div className='row'>
      <div className='col h5'><LTX>ax^2 + bx + c = 0</LTX></div>
      <div className='col h5'><LTX>{`${a}x^2 + ${b}x + ${c} = 0`}</LTX></div>
    </div>
    <div className='row'>
      <div className='col h5'><LTX>4a^2x^2 + 4abx + 4ac = 0</LTX></div>
      <div className='col h5'><LTX>{`${4 * Math.pow(a, 2)}x^2 + ${4 * a * b}x + ${4 * a * c} = 0`}</LTX></div>
    </div>
    <div className='row'>
      <div className='col h5'><LTX>4a^2x^2 + 4abx = -4ac</LTX></div>
      <div className='col h5'><LTX>{`${4 * Math.pow(a, 2)}x^2 + ${4 * a * b}x = -${4 * a * c}`}</LTX></div>
    </div>
    <div className='row'>
      <div className='col h5'><LTX>4a^2x^2 + 4abx + b^2 = b^2 -4ac</LTX></div>
      <div className='col h5'><LTX>{`${4 * Math.pow(a, 2)}x^2 + ${4 * a * b}x + ${Math.pow(b, 2)} = ${Math.pow(b, 2)} -${4 * a * c}`}</LTX></div>
    </div>
    <div className='row'>
      <div className='col h5'><LTX>(2ax + b)^2 = b^2 -4ac</LTX></div>
      <div className='col h5'><LTX>{`(${2 * a}x + ${b})^2 = ${Math.pow(b, 2) - (4 * a * c)}`}</LTX></div>
    </div>
    <div className='row'>
      <div className='col h5'><LTX>2ax + b = sqrt(b^2 -4ac)</LTX></div>
      <div className='col h5'><LTX>{`${2 * a}x + ${b} = sqrt(${Math.pow(b, 2) - (4 * a * c)})`}</LTX></div>
    </div>
    <div className='row'>
      <div className='col h5'><LTX>2ax = -b pm sqrt(b^2 -4ac)</LTX></div>
      <div className='col h5'><LTX>{`${2 * a}x = -${b} pm sqrt(${Math.pow(b, 2) - (4 * a * c)}))`}</LTX></div>
    </div>
    <div className='row'>
      <div className='col h3'><LTX>{'x = {-b pm sqrt(b^2 -4ac)}/{2a}'}</LTX></div>
      <div className='col h3'><LTX>{`x = {-${b} pm sqrt(${Math.pow(b, 2) - (4 * a * c)})}/${2 * a}`}</LTX></div>
    </div>
    <div className='row'>
      <div className='col h3'><LTX>{`x approx ${Round(((-b + Math.pow(b, 2) - (4 * a * c)) / (2 * a)), 2)}, x approx ${Round(((-b - Math.pow(b, 2) - (4 * a * c)) / (2 * a)), 2)}`}</LTX></div>
    </div>
  </>
);

Answers.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  c: PropTypes.number.isRequired,
};

export default Answers;
