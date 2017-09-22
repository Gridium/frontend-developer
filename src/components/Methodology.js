import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/methodology-cover.jpg';
import { job } from '../jobData';
import DataBoolean from './DataBoolean';
import '../methodology.css';

const Methodology = () => {
  const data = job.methodology;

  const resultBoolean = Object.keys(data).filter((i) => {
    const arr = ['buildserver', 'staticcodeanalysis', 'versioncontrol', 'issuetracker'];
    if (!arr.includes(i)) {
      return i;
    }
  }).map(key => ({ key, value: data[key] }));

  const listBooleans = resultBoolean.map((item, index) =>
    <DataBoolean key={index} label={item.key} value={item.value.toString()} />
  );
  return (
    <div>
      <PageHeader title={'Methodology'} />
      <section>
        <div className='data-box data-bool-box'>
          {listBooleans}
        </div>
      </section>
      <Footer background={Background} />
    </div>
  )
};

export default Methodology;
