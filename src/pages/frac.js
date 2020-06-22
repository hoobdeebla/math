import React  from 'react';
import Layout from '../components/layout';

import { withPrefix } from 'gatsby';
import FracAnswers    from '../answers/frac';

const title = 'Fraction Multitool';
const image = withPrefix('/images/cream_pixels.png');

const Frac = () => {
  const [k, setK] = React.useState('');
  const [l, setL] = React.useState('');
  const [m, setM] = React.useState('');
  const [n, setN] = React.useState('');

  const [selected, setSelected] = React.useState('*');

  const select = (e) => setSelected(e.target.value);

  return (
    <Layout title={title} image={image}>
      <div className='row pt-4'>
        <h1 className='col-12'>{title}</h1>
        <h2 className='col-12'>Generalization of fraction operations</h2>
      </div>


      <div className='row pt-4 align-items-center'>
        <div className='col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-1'>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Fraction 1 numerator:</span>
            </div>
            <input type='number' value={m} onChange={(e) => setM(e.target.value)} className='form-control text-right' min='-999' max='999' placeholder='m' />
          </div>
          <hr />
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Fraction 1 denominator:</span>
            </div>
            <input type='number' value={n} onChange={(e) => setN(e.target.value)} className='form-control text-right' min='-999' max='999' placeholder='n' />
          </div>
        </div>

        <div className='col-12 d-lg-none'><br /><br /></div>

        <div className='col-12 col-lg-2'>
          <form className='btn-group btn-group btn-group-toggle' role='group' data-toggle='buttons'>
            <label className='btn btn-secondary active'>
              <input type='radio' name='op' value='*' checked={selected === '*'} onClick={select} />Of
            </label>
            <label className='btn btn-secondary'>
              <input type='radio' name='op' value='+' checked={selected === '+'} onClick={select} />+
            </label>
            <label className='btn btn-secondary'>
              <input type='radio' name='op' value='-' checked={selected === '-'} onClick={select} />-
            </label>
          </form>
        </div>

        <div className='col-12 d-lg-none'><br /><br /></div>

        <div className='col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-0'>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Fraction 2 numerator:</span>
            </div>
            <input type='number' value={k} onChange={(e) => setK(e.target.value)} className='form-control text-right' min='-999' max='999' placeholder='k' />
          </div>
          <hr />
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Fraction 2 denominator:</span>
            </div>
            <input type='number' value={l} onChange={(e) => setL(e.target.value)} className='form-control text-right' min='-999' max='999' placeholder='l' />
          </div>
        </div>
      </div>


      <div className='row py-4'>
        <div className='col-10 offset-1'>
          <FracAnswers op={selected} nums={{ k: Number(k), l: Number(l), m: Number(m), n: Number(n) }} />
        </div>
      </div>
    </Layout>
  );
};

export default Frac;
