export const profile = {
    chart: {
        chart: null,
        chartData: null,
        options: {
            pieHole: 0.4
        }
    },
    profileChartWrapperId: 'profile_chart_wrapper',
    profileChartId: 'profile_chart',
    resizeDone: function() {
        this.chart.options.width = '100%';
        this.chart.options.height = '100%';
        this.chart.chart.draw(this.chart.chartData, this.chart.options);
    },
    render: function () {
        const that = this;
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        const profileChartWrapper = document.createElement('div');
        const profileChart = document.createElement('div');
        
        sectionTitle.textContent = 'Developer Profile';
        profileChartWrapper.id = this.profileChartWrapperId;
        profileChart.id = this.profileChartId;
        profileChart.style.maxHeight = '300px';
        
        profileChartWrapper.appendChild(profileChart);
        wrapper.appendChild(sectionTitle);
        wrapper.appendChild(profileChartWrapper);
        
        let throttler;
        window.onresize = function() {
            clearTimeout(throttler);
            throttler = setTimeout(function() {
                that.resizeDone();
            }, 100);
        };

        return wrapper;
    },
    drawChart: function (data) {
        const that = this;
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            that.chart.chartData = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['New Features', data.newfeatures],
                ['Client Support', data.clientsupport],
                ['Documentation', data.documentation],
                ['Maintenance', data.maintenance],
                ['Meetings', data.meetings],
            ]);
            that.chart.chart = new google.visualization.PieChart(document.getElementById(that.profileChartId));
            that.chart.chart.draw(that.chart.chartData, that.chart.options);
        }
    }
};