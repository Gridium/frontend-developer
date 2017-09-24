import React, { Component } from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/specs-cover.jpg';
import { job, ScheduleOptions, RemoteWorking, PTO } from '../jobData';
import DataItem from './DataItem';
import HorizontalBarChart from './HorizontalBarChart';
import DoughnutChart from './DoughnutChart';

class Specs extends Component {
  constructor() {
    super();
    this.state = {
      horizontalBarData: {}
    }

    // Reference data
    this.data = job.specs;

    // Process data into [key: , value: ] array
    this.result = Object.keys(this.data).filter((i) => {
      return i !== 'workload' && i !== 'workweek';
    }).map(key => ({ key, value: this.data[key] }));

    // Map data into corresponding DataItem components
    this.listItems = this.result.map((item, index) =>
      item.key === 'schedule' ? <DataItem label={item.key} value={item.value} options={ScheduleOptions().all} />
      : item.key === 'remote' ? <DataItem label={item.key} value={item.value} options={RemoteWorking().all} />
      : item.key ==='pto' ? <DataItem label={item.key} value={item.value} options={PTO().all} />
      :                             <DataItem key={index} label={item.key} value={item.value} />
    );
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      horizontalBarData: {
        xLabels: Object.keys(job.specs).filter(function(i) {
          return i === "workweek"
        }),
        datasets: [
          {
            label: 'Hours',
            data: [job.specs.workweek],
            fill: true,
            backgroundColor: 'rgba(226, 103, 15, 0.8)'
          }
        ]
      },
      doughnutData: {
        labels: ['Workload'],
        datasets: [{
          label: 'Workload',
          data: [job.specs.workload],
          backgroundColor: 'rgba(0, 161, 224, 0.8)'
        }]
      }
    })
  }

  render() {
    return (
      <div>
        <PageHeader title={'Specs'} />
        <section>
          <DoughnutChart doughnutData={this.state.doughnutData} />
          <HorizontalBarChart horizontalBarData={this.state.horizontalBarData} />
          <div className='data-box'>
            <span className='line2'></span>
            {this.listItems}
          </div>
        </section>
        <Footer background={Background} footerClass={'footer-specs'}/>
      </div>
    )
  }
};

export default Specs;
