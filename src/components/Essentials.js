import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/essentials-cover.jpg';
import { job, ExperienceLevels, EmploymentType, CompanySize } from '../jobData';
import DataItem from './DataItem';

const Essentials = () => {
  // Reference data
  const data = job.essentials;

  // Process data into [key: , value: ] array
  const result = Object.keys(data).filter((i) => {
    return i !== 'teamsize';
  }).map(key => ({ key, value: data[key] }));

  // Map data into corresponding DataItem components
  const listItems = result.map((item, index) =>
    item.key === 'employment' ? <DataItem key={index} label={item.key} value={item.value} options={EmploymentType().all} />
    : item.key === 'experience' ? <DataItem key={index} label={item.key} value={item.value} options={ExperienceLevels().all} />
    : item.key === 'companysize' ? <DataItem key={index} label={item.key} value={item.value} options={CompanySize().all} />
    :                             <DataItem key={index} label={item.key} value={item.value} />
  );

  return (
    <div>
      <PageHeader title={'Essentials'} />
      <section>
        <div className='data-box'>
         {listItems}
         <DataItem label={'teamsize'} value={`${data.teamsize.min} - ${data.teamsize.max}`} />
        </div>
      </section>
      <Footer background={Background} footerClass={'footer-essentials'} />
    </div>
  )
};

export default Essentials;
