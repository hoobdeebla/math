import React  from 'react';
import Round  from '../utils/round';
import LTX    from '../components/latex';
import Layout from '../components/layout';

import DistAnswers from '../answers/dist';

const title = 'Distancer';


const Distancer = () => {
  const [X1, setX1] = React.useState('');
  const [Y1, setY1] = React.useState('');

  const [X2, setX2] = React.useState('');
  const [Y2, setY2] = React.useState('');

  return (
    <Layout title={title}>
      <div className='container rounded-lg text-dark' style={{ background: 'url("/images/squairy_light.png")' }}>
        <div className='row pt-2'>
          <h1 className='col-12'>{title}</h1>
          <h2 className='col-12'>Find the distance between two points &ldquo;as the crow flies&rdquo;</h2>
        </div>


        <div className='row pt-4'>
          <div className='col-12 col-sm-6 col-md input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Point 1 X coord:</span>
            </div>
            <input type='number' value={X1} onChange={(e) => setX1(e.target.value)} className='form-control text-right' min='-999' max='999' placeholder='X1' />
          </div>
          <div className='col-12 d-sm-none'><br /></div>
          <div className='col-12 col-sm-6 col-md input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Point 1 Y coord:</span>
            </div>
            <input type='number' value={Y1} onChange={(e) => setY1(e.target.value)} className='form-control text-right' min='-999' max='999' placeholder='Y1' />
          </div>

          <div className='col-12 d-md-none'><br /><br /></div>

          <div className='col-12 col-sm-6 col-md input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Point 2 X coord:</span>
            </div>
            <input type='number' value={X2} onChange={(e) => setX2(e.target.value)} className='form-control text-right' min='-999' max='999' placeholder='X2' />
          </div>
          <div className='col-12 d-sm-none'><br /></div>
          <div className='col-12 col-sm-6 col-md input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Point 2 Y coord:</span>
            </div>
            <input type='number' value={Y2} onChange={(e) => setY2(e.target.value)} className='form-control text-right' min='-999' max='999' placeholder='Y2' />
          </div>
        </div>


        <div className='row pt-4 pb-2'>
          <h3 className='col-12'>
            Points: {`(${X1}, ${Y1}), (${X2}, ${Y2})`}
          </h3>
          <h3 className='col-12'>
            Answer: {Round(Math.sqrt(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2)), 2)}
          </h3>
          <div className='col-12'>
            <button type='button' className='btn btn-lg btn-light m-3' data-toggle='modal' data-target='#results'>View more detailed results</button>
          </div>
        </div>


        <div className='modal fade' id='results' tabIndex='-1' role='dialog' aria-labelledby='results-label'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='results-label'>More detailed results | points: <LTX>{`$(${X1}, ${Y1})$`}</LTX>, <LTX>{`$(${X2}, ${Y2})$`}</LTX></h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
              </div>

              <div className='modal-body'>
                <DistAnswers X1={Number(X1)} Y1={Number(Y1)} X2={Number(X2)} Y2={Number(Y2)} />
              </div>

              <div className='modal-footer'><button type='button' className='btn btn-primary' data-dismiss='modal'>Close</button></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Distancer;
