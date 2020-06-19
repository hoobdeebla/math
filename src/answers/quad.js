import React  from 'react';
import Latex  from 'react-latex';
import Round  from '../utils/round';
import Format from '../utils/format';

import PropTypes from 'prop-types';


const Answers = ({ a, b, c }) => (
  <>
    <div className='row'>
      <div className='col h5'><Latex>{Format('ax^2 + bx + c = 0')}</Latex></div>
      <div className='col h5'><Latex>{Format(`${a}x^2 + ${b}x + ${c} = 0`)}</Latex></div>
    </div>
    <div className='row'>
      <div className='col h5'><Latex>{Format('4a^2x^2 + 4abx + 4ac = 0')}</Latex></div>
      <div className='col h5'><Latex>{Format(`${4 * Math.pow(a, 2)}x^2 + ${4 * a * b}x + ${4 * a * c} = 0`)}</Latex></div>
    </div>
    <div className='row'>
      <div className='col h5'><Latex>{Format('4a^2x^2 + 4abx = -4ac')}</Latex></div>
      <div className='col h5'><Latex>{Format(`${4 * Math.pow(a, 2)}x^2 + ${4 * a * b}x = -${4 * a * c}`)}</Latex></div>
    </div>
    <div className='row'>
      <div className='col h5'><Latex>{Format('4a^2x^2 + 4abx + b^2 = b^2 -4ac')}</Latex></div>
      <div className='col h5'><Latex>{Format(`${4 * Math.pow(a, 2)}x^2 + ${4 * a * b}x + ${Math.pow(b, 2)} = ${Math.pow(b, 2)} -${4 * a * c}`)}</Latex></div>
    </div>
    <div className='row'>
      <div className='col h5'><Latex>{Format('(2ax + b)^2 = b^2 -4ac')}</Latex></div>
      <div className='col h5'><Latex>{Format(`(${2 * a}x + ${b})^2 = ${Math.pow(b, 2) - (4 * a * c)}`)}</Latex></div>
    </div>
    <div className='row'>
      <div className='col h5'><Latex>{Format('2ax + b = sqrt(b^2 -4ac)')}</Latex></div>
      <div className='col h5'><Latex>{Format(`${2 * a}x + ${b} = sqrt(${Math.pow(b, 2) - (4 * a * c)})`)}</Latex></div>
    </div>
    <div className='row'>
      <div className='col h5'><Latex>{Format('2ax = -b pm sqrt(b^2 -4ac)')}</Latex></div>
      <div className='col h5'><Latex>{Format(`${2 * a}x = -${b} pm sqrt(${Math.pow(b, 2) - (4 * a * c)}))`)}</Latex></div>
    </div>
    <div className='row'>
      <div className='col h3'><Latex>{Format('x = {-b pm sqrt(b^2 -4ac)}/{2a}')}</Latex></div>
      <div className='col h3'><Latex>{Format(`x = {-${b} pm sqrt(${Math.pow(b, 2) - (4 * a * c)})}/${2 * a}`)}</Latex></div>
    </div>
    <div className='row'>
      <div className='col h3'><Latex>{Format(`x approx ${Round(((-b + Math.pow(b, 2) - (4 * a * c)) / (2 * a)), 2)}, x approx ${Round(((-b - Math.pow(b, 2) - (4 * a * c)) / (2 * a)), 2)}`)}</Latex></div>
    </div>
  </>
);

Answers.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  c: PropTypes.number.isRequired,
};

export default Answers;
