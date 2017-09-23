import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/methodology-cover.jpg';
import { job, BuildServers, CodeAnalysisTools, VersionControlSystem, IssueTrackers } from '../jobData';
import DataBoolean from './DataBoolean';
import DataItem from './DataItem';
import '../methodology.css';

const Methodology = () => {
  // Reference Data
  const data = job.methodology;

  // Process data into [key: , value: ] array
  const resultBoolean = Object.keys(data).filter((i) => {
    const arr = ['buildserver', 'staticcodeanalysis', 'versioncontrol', 'issuetracker'];
    if (!arr.includes(i)) {
      return i;
    }
  }).map(key => ({ key, value: data[key] }));

  // Map data into corresponding DataBoolean components
  const listBooleans = resultBoolean.map((item, index) =>
    <DataBoolean key={index} label={item.key} value={item.value.toString()} />
  );

  // Process data into [key: , value: ] array
  const resultItems = Object.keys(data).filter((i => {
    const arr = ['buildserver', 'staticcodeanalysis', 'versioncontrol', 'issuetracker'];
    if (arr.includes(i)) {
      return i;
    }
  })).map(key => ({ key, value: data[key] }));

  // Map data into corresponding DataItem components
  const listItems = resultItems.map((item, index) =>
    item.key === 'buildserver' ? <DataItem label={item.key} value={item.value} options={BuildServers().all} />
    : item.key === 'staticcodeanalysis' ? <DataItem label={item.key} value={item.value} options={CodeAnalysisTools().all} />
    : item.key === 'versioncontrol' ? <DataItem label={item.key} value={item.value} options={VersionControlSystem().all} />
    : item.key === 'issuetracker' ? <DataItem label={item.key} value={item.value} options={IssueTrackers().all} />
    :                             <DataItem key={index} label={item.key} value={item.value} />
  );

  return (
    <div>
      <PageHeader title={'Methodology'} />
      <section>
        <div className='data-box data-bool-box'>
          {listBooleans}
        </div>
        <div className='data-box'>
          <span className='line2'></span>
          {listItems}
        </div>
      </section>
      <Footer background={Background} />
    </div>
  )
};

export default Methodology;
