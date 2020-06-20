import React  from 'react';
import Round  from '../utils/round';
import Layout from '../components/layout';

const title = 'Pythagorifier';


const Pyth = () => {
  const [A, setA] = React.useState('');
  const [B, setB] = React.useState('');
  const [C, setC] = React.useState('');

  const Calculate = () => {
    const cc = Math.pow(A, 2) + Math.pow(B, 2);
    const bb = Math.pow(C, 2) - Math.pow(A, 2);
    const aa = Math.pow(C, 2) - Math.pow(B, 2);
    if (!A && B && C) {
      setA(Round(Math.sqrt(aa), 2));
    } else if (A && !B && C) {
      setB(Round(Math.sqrt(bb), 2));
    } else if (A && B && !C) {
      setC(Round(Math.sqrt(cc), 2));
    }
  };

  return (
    <Layout title={title}>
      <div className='container rounded-lg text-dark' style={{ background: 'url("/images/wave_grid.png")' }}>
        <div className='row pt-2'>
          <h1 className='col-12'>{title}</h1>
          <h2 className='col-12'>Press the button to calculate the missing side</h2>
        </div>

        <div className='row pt-4'>
          <div className='col input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Leg 1:</span>
            </div>
            <input type='number' value={A} onChange={(e) => setA(e.target.value)} className='form-control text-right' min='0' max='999' placeholder='A' />
          </div>
          <div className='col input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Leg 2:</span>
            </div>
            <input type='number' value={B} onChange={(e) => setB(e.target.value)} className='form-control text-right' min='0' max='999' placeholder='B' />
          </div>
          <div className='col input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Hypotenuse:</span>
            </div>
            <input type='number' value={C} onChange={(e) => setC(e.target.value)} className='form-control text-right' min='0' max='999' placeholder='C' />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <button type='button' className='btn btn-light btn-lg m-3' onClick={Calculate}>Calculate</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pyth;
