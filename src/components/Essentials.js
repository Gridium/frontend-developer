import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/essentials-cover.jpg';
import { job } from '../jobData';
import DataItem from './DataItem';
import '../essentials.css';

const Essentials = () => {
  const data = job.essentials;

  const result = Object.keys(data).filter((i) => {
    return i != 'teamsize';
  }).map(key => ({ key, value: data[key] }));

  const dataItems = result.map((item, index) =>
    <DataItem key={index} label={item.key} value={item.value} />
  );
  return (
    <div>
      <PageHeader title={'Essentials'} />
      <section>
        <div className='data-box'>
         {dataItems}
         <DataItem label={'teamsize'} value={`${data.teamsize.min} - ${data.teamsize.max}`} />
        </div>
      </section>
      <Footer background={Background} />
    </div>
  )
};

export default Essentials;
