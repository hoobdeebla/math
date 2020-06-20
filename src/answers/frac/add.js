import React from 'react';
import LTX   from '../../components/latex';

import PropTypes from 'prop-types';


const AddSolution = ({ nums }) => {
  const { k, l, m, n } = nums;

  if (l === n) {
    return <h5>On a number line partitioned in <LTX>n</LTX>ths or <LTX>l</LTX>ths ({n}ths), count <LTX>{`k (${k})`}</LTX> spaces to the right of <LTX>{`m (${m})`}</LTX>.</h5>;
  } else {
    return (
      <>
        <h5>
          On a number line partitioned in <LTX>n</LTX>ths or <LTX>l</LTX>ths, We will count <LTX>{`k (${k})`}</LTX> spaces to the right of <LTX>{`m (${m})`}</LTX>, but we can't do that yet because the fractions don't have the same denominator <LTX>(n != l)</LTX>.
          We must do equivalent fractions to make their denominators equal:
        </h5>
        <h6>
          <LTX block>{'m/n + k/l = {m times l}/{n times l} + {k times n}/{n times l}'}</LTX>
          <LTX block>{`${m}/${n} + ${k}/${l} = {${m} times ${l}}/{${n} times ${l}} + {${k} xx ${n}}/{${n} times ${l}} = ${l * m}/${l * n} + ${k * n}/${l * n}`}</LTX>
        </h6>
        <h5>Now we can concatenate the two fractions.</h5>
      </>
    );
  }
};

const AddAnswer = ({ nums }) => {
  const { k, l, m, n } = nums;

  if (l === n) {
    return (
      <h6>
        <LTX block>{'m/n + k/l = {m+k}/n " or " {m+k}/l'}</LTX>
        <br />
        <LTX block>{`${m}/${n} + ${k}/${l} = ${m + k}/${l}`}</LTX>
      </h6>
    );
  } else {
    return (
      <h6>
        <LTX block>{'m/n + k/l = {m times l+k times n}/{n times l} = {lm+kn}/{ln}'}</LTX>
        <br />
        <LTX block>{`${m}/${n} + ${k}/${l} = {${m} times ${l} + ${k} xx ${n}}/{${n} times ${l}} = {${m * l} + ${k * n}}/{${n * l}} = ${l * m + k * n}/${l * n}`}</LTX>
      </h6>
    );
  }
};

const Add = ({ nums }) => {
  const { k, l, m, n } = nums;

  return (
    <>
      <h3>Problem:</h3>
      <h5>Find <LTX>{`m/n + k/l (${m}/${n} + ${k}/${l})`}</LTX></h5>
      <br />
      <h3>Explanation:</h3>
      <h5>Concatenate <LTX>{`k/l (${k}/${l})`}</LTX> to a number line starting at <LTX>{`m/n (${m}/${n})`}</LTX> </h5>
      <br />
      <h3>Solution:</h3>
      <AddSolution nums={nums} />
      <br />
      <h3>Answer:</h3>
      <AddAnswer nums={nums} />
    </>
  );
};

Add.propTypes = {
  nums: PropTypes.shape({
    k: PropTypes.number.isRequired,
    l: PropTypes.number.isRequired,
    m: PropTypes.number.isRequired,
    n: PropTypes.number.isRequired,
  }),
};

export default Add;
