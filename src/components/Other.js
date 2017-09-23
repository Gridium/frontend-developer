import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import { job } from '../jobData';
import Background from '../images/buildings-vector-pattern.jpg';
import '../other.css';

const Other = () => {
  const data = job.other;

  return (
    <div>
      <PageHeader title={'Other'} />
      <section>
        <div className='data-box'>
          <div>
            <i className="fa fa-check-square-o fa-3x" aria-hidden="true"></i>
            <div className='other-info'>{data[0]}</div>
          </div>
          <div className='x-margin-top'>
            <i className="fa fa-check-square-o fa-3x" aria-hidden="true"></i>
            <div className='other-info'>{data[1]}</div>
          </div>
          <p className='xx-margin-top'>If you agree with the above, get in touch!</p>
          <a className='other-btn' href='https://gridium.com/about/working-at-gridium/' target='_blank'>Learn More</a>
        </div>
      </section>
      <Footer background={Background} />
    </div>
  )
};

export default Other;
