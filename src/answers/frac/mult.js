import React from 'react';
import LTX   from '../../components/latex';

import PropTypes from 'prop-types';


const MultSolution = ({ nums }) => {
  const { k, l, m, n } = nums;

  if (k % n === 0) {
    return <h5>The first step is to partition <LTX>{`k/l (${k}/${l})`}</LTX> into <LTX>{`n (${n})`}</LTX> equal parts, each of which is <LTX>{`{k div n}/l (${(k / n)} / ${l})`}</LTX> in length. Then, concatenate <LTX>{`m (${m})`}</LTX> of these parts.</h5>;
  } else {
    return (
      <>
        <h5>
          The first step is to partition <LTX>{`k/l (${k}/${l})`}</LTX> into <LTX>{`n (${n})`}</LTX> equal parts, but we can't, so we must force <LTX>{`k/l (${k}/${l})`}</LTX> into being able to be split into <LTX>{`n (${n})`}</LTX> equal parts.
          In order to do that, we must use equivalent fractions to make <LTX>{`k (${k})`}</LTX> into a multiple of <LTX>{`n (${n})`}</LTX>:
        </h5>
        <h6>
          <LTX block>{'k/l = {k times n}/{l times n} = {kn}/{ln}'}</LTX>
          <LTX block>{`${k}/${l} = {${k} times ${n}}/{${l} times ${n}} = ${k * n}/${l * n}`}</LTX>
        </h6>
        <h5>The next step is to split the equivalent fraction into <LTX>{`n (${n})`}</LTX> equal parts, each of which is <LTX>{`k/{ln} (${k}/${l * n})`}</LTX> in length. All that is left is to concatenate <LTX>{`m (${m})`}</LTX> of these parts.</h5>
      </>
    );
  }
};

const MultAnswer = ({ nums }) => {
  const { k, l, m, n } = nums;

  if (k % n === 0) {
    return <h6><LTX block>{`${m}/${n} times ${k}/${l} = ${k * m / n}/${l}`}</LTX></h6>;
  } else {
    return <h6><LTX block>{`${m}/${n} times ${k}/${l} = ${k * m}/${l * n}`}</LTX></h6>;
  }
};


const Mult = ({ nums }) => {
  const { k, l, m, n } = nums;

  return (
    <>
      <h3>Problem:</h3>
      <h5>Find <LTX>m/n</LTX> of <LTX>{`k/l (${m}/${n} times ${k}/${l})`}</LTX></h5>
      <br />
      <h3>Explanation:</h3>  {/*  messy LTX calls necessary to properly display coordinate pair within parentheses */}
      <h5>Partition <LTX>[0, k/l] (</LTX><LTX>{`[0 , ${k}/${l}]`}</LTX><LTX>)</LTX> into <LTX>{`n (${n})`}</LTX> equal parts, then concatenate <LTX>{`m (${m})`}</LTX> of those parts</h5>
      <br />
      <h3>Solution:</h3>
      <MultSolution nums={nums} />
      <br />
      <h3>Answer:</h3>
      <h5><LTX>m/n</LTX> of <LTX>k/l</LTX> is <LTX>{'{k times m}/{l times n}'}</LTX></h5>
      <MultAnswer nums={nums} />
    </>
  );
};

Mult.propTypes = {
  nums: PropTypes.shape({
    k: PropTypes.number.isRequired,
    l: PropTypes.number.isRequired,
    m: PropTypes.number.isRequired,
    n: PropTypes.number.isRequired,
  }),
};

export default Mult;
