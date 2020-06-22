import React  from 'react';
import Round  from '../utils/round';
import Layout from '../components/layout';

import { withPrefix } from 'gatsby';

const title = 'Carbon Counts';
const image = withPrefix('/images/45_degree_fabric.png');

const CarbonCounts = () => {
  const [price, setPrice] = React.useState(2.25);
  const [dist,  setDist]  = React.useState(10);
  const [mpg,   setMPG]   = React.useState(25);

  return (
    <Layout title={title} image={image}>
      <div className='row pt-2'>
        <h1 className='col-12'>{title}</h1>
        <h2 className='col-12'>Info about car trips and daily commutes</h2>
      </div>

      <div className='row pt-4 d-md-none d-xl-flex'> {/* three equal-width, well-spaced inputs for small and desktop screens */}
        <div className='col col-lg-2 offset-lg-3 input-group'>
          <input type='number' value={dist}  onChange={(e) => setDist(e.target.value)}  className='form-control' min='0' max='999999' step='5'   placeholder='Distance travelled' />
          <div className='input-group-append'>
            <span className='input-group-text'>mi</span>
          </div>
        </div>
        <div className='col col-lg-2 input-group'>
          <input type='number' value={mpg}   onChange={(e) => setMPG(e.target.value)}   className='form-control' min='0' max='999'    step='0.1' placeholder='Efficiency (MPG)' />
          <div className='input-group-append'>
            <span className='input-group-text'>mpg</span>
          </div>
        </div>
        <div className='col col-lg-2 input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>$</span>
          </div>
          <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' min='0' max='999'    step='0.01' placeholder='Gas price' />
        </div>
      </div>
      <div className='row pt-4 d-none d-md-flex d-xl-none'> {/* the same inputs for medium screens */}
        <div className='col-10 offset-1 col-lg-8 offset-lg-2'>
          <div className='container'>
            <div className='row'>
              <div className='col input-group'>
                <input type='number' value={dist}  onChange={(e) => setDist(e.target.value)}  className='form-control' min='0' max='999999' step='5'   placeholder='Distance travelled' />
                <div className='input-group-append'>
                  <span className='input-group-text'>mi</span>
                </div>
              </div>
              <div className='col input-group'>
                <input type='number' value={mpg}   onChange={(e) => setMPG(e.target.value)}   className='form-control' min='0' max='999'    step='0.1' placeholder='Efficiency (MPG)' />
                <div className='input-group-append'>
                  <span className='input-group-text'>mpg</span>
                </div>
              </div>
              <div className='col input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>$</span>
                </div>
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' min='0' max='999'    step='0.01' placeholder='Gas price' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <p className='col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-4 lead'>
          A car that gets {mpg} mpg will take {Round((dist / mpg), 2)} gallons of gas to drive {dist} miles, which will cost about ${Round((dist / mpg * price), 2)}.
          The journey will emit {Round((dist / mpg * 19.4), 2)} pounds of carbon. It would take {Round((dist / mpg * 19.4 / 13), 2)} years for one healthy tree to clean the carbon from the air.
        </p>
      </div>
    </Layout>
  );
};

export default CarbonCounts;
