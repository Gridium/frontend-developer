import React, { Component } from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/profile-cover.jpg';
import { job } from '../jobData';
import RadarChart from './RadarChart';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      radarData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      radarData: {
        labels: Object.keys(job.profile),
        datasets: [{
          data: Object.values(job.profile),
          backgroundColor: 'rgba(0, 161, 224, 0.5)',
          borderColor: 'rgba(0, 66, 119, 0.8)',
          pointBackgroundColor: 'rgba(226, 103, 15, 0.8)',
        }]
      }
    })
  }

  render() {
    return (
      <div>
        <PageHeader title={'Profile'} />
        <section>
          <RadarChart radarData={this.state.radarData} />
        </section>
        <Footer background={Background} />
      </div>
    )
  }
}

export default Profile;
