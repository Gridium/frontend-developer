import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import { job } from '../jobData';
import Background from '../images/buildings-vector-pattern.jpg';

const Other = () => {
  const data = job.other;

  return (
    <div>
      <PageHeader title={'Other'} />
      <section>
        <div className='data-box'>
          <div>{data[0]}</div>
          <div>{data[1]}</div>
          <p>If you agree with the above, let us know!</p>
          <a href='https://gridium.com/about/working-at-gridium/' target='_blank'>Learn More</a>
        </div>
      </section>
      <Footer background={Background} />
    </div>
  )
};

export default Other;
