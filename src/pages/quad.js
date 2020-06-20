import React  from 'react';
import Latex  from 'react-latex';
import LTX    from '../components/latex';
import Layout from '../components/layout';

import QuadAnswers from '../answers/quad';

const title = 'Quadrifier';


const Quad = () => {
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const [c, setC] = React.useState('');


  return (
    <Layout title={title}>
      <div className='container rounded-lg text-dark' style={{ background: 'url("/images/pw_maze_white.png")' }}>
        <div className='row pt-2'>
          <h1 className='col-12'>{title}</h1>
          <h2 className='col-12'><Latex>Enter $a, b,$ and $c$ for $ax^2 + bx + c = 0$</Latex></h2>
        </div>


        <div className='row pt-4'>
          <div className='col input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>First term:</span>
            </div>
            <input type='number' value={a} onChange={(e) => setA(e.target.value)} className='form-control text-right' min='-99' max='99' placeholder='a' />
          </div>
          <div className='col input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Second term:</span>
            </div>
            <input type='number' value={b} onChange={(e) => setB(e.target.value)} className='form-control text-right' min='-99' max='99' placeholder='b' />
          </div>
          <div className='col input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Third term:</span>
            </div>
            <input type='number' value={c} onChange={(e) => setC(e.target.value)} className='form-control text-right' min='-99' max='99' placeholder='c' />
          </div>
        </div>

        <div className='row'>
          <div className='col-12 text-center'>
            <button type='button' className='btn btn-lg btn-light m-3' data-toggle='modal' data-target='#results'>View more detailed results</button>
          </div>
        </div>


        <div className='row pt-4 pb-2 text-center'>
          <h3 className='col-12'>
            Formula: <LTX>{'x = {-b pm sqrt(b^2 - 4ac)}/{2a}'}</LTX>
          </h3>
          <h3 className='col-12'>
            Answer: <LTX>{`x = {${-b} pm sqrt(${Math.pow(b, 2) - (4 * a * c)})}/${2 * a}`}</LTX>

          </h3>
          <div className='col-12'>
            <button type='button' className='btn btn-lg btn-light m-3' data-toggle='modal' data-target='#results'>View more detailed results</button>
          </div>
        </div>


        <div className='modal fade' id='results' tabIndex='-1' role='dialog' aria-labelledby='results-label'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='results-label'>Quadratic formula walkthrough: more detailed results</h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
              </div>

              <div className='modal-body text-center'>
                <QuadAnswers className='container-fluid' a={Number(a)} b={Number(b)} c={Number(c)} />
              </div>

              <div className='modal-footer'><button type='button' className='btn btn-primary' data-dismiss='modal'>Close</button></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quad;
