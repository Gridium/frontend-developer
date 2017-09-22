import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class RadarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radarData: props.radarData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: 'right'
  }

  render() {
    return (
      <div className='chart'>
        <Radar
          data={this.state.radarData}
          height={200}
          options={{
            responsive: true,
            title: {
              display: this.props.displayTitle,
              text: 'Profile',
              fontSize: 25,
              fontFamily: 'Montserrat, sans-serif',
              fontColor: '#004277'
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            animation: {
              duration: 2000
            },
          }}
        />
      </div>
    )
  }
};

export default RadarChart;
