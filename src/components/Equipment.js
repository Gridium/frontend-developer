import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/equipment-cover.jpg';
import { job, OperationSystems, MachineType } from '../jobData';
import DataItem from './DataItem';


const Equipment = () => {
  // Reference data
  const data = job.equipment;

  // Process data into [key: , value: ] array
  const result = Object.keys(data).map(key => ({ key, value: data[key] }));

  // Map data into corresponding DataItem components
  const listItems = result.map((item, index) =>
    item.key === 'operatingsystem' ? <DataItem label={item.key} value={item.value} options={OperationSystems().all} />
    : item.key === 'computer' ? <DataItem label={item.key} value={item.value} options={MachineType().all} />
    :                             <DataItem key={index} label={item.key} value={item.value} />
  );

  return (
    <div>
      <PageHeader title={'Equipment'} />
      <section>
        <div className='data-box'>
         {listItems}
        </div>
      </section>
      <Footer background={Background} footerClass={'footer-equipment'} />
    </div>
  )
};

export default Equipment;
