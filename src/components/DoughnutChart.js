import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doughnutData: props.doughnutData
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
        <Doughnut
          data={this.state.doughnutData}
          height={100}
          options={{
            responsive: true,
            title: {
              display: this.props.displayTitle,
              text: 'Workload',
              fontSize: 25,
              fontFamily: 'Montserrat, sans-serif',
              fontColor: '#004277'
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            animation: {
              duration: 1500
            },
          }}
        />
      </div>
    )
  }
};

export default DoughnutChart;
