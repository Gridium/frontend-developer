import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../doughnutchart.css';

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
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
};

export default DoughnutChart;
