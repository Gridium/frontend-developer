import { LevelResources } from '../job';
import { createRow } from '../helpers';
import { languageColors } from '../languageColors';

export const technologies = {
    charts: {
        tech: {
            chart: null,
            chartData: null,
            options: {
                height: 400,
                bar: { groupWidth: '70%' },
                legend: { position: 'none' }
            }
        },
        test: {
            chart: null,
            chartData: null,
            options: {
                height: 200,
                bar: { groupWidth: '70%' },
                legend: { position: 'none' }
            }

        },
        framework: {
            chart: null,
            chartData: null,
            options: {
                height: 200,
                bar: { groupWidth: '70%' },
                legend: { position: 'none' }
            }
        }
    },
    techChartWrapperId: 'tech_chart_wrapper',
    techChartId: 'tech_chart',
    testChartWrapperId: 'test_chart_wrapper',
    testChartId: 'test_chart',
    frameworkChartWrapperId: 'framework_chart_wrapper',
    frameworkChartId: 'framework_chart',
    resizeDone: function () {
        this.charts.tech.options.width = '100%';
        this.charts.tech.options.height = '100%';
        this.charts.tech.chart.draw(this.charts.tech.chartData, this.charts.tech.options);

        this.charts.test.options.width = '100%';
        this.charts.test.options.height = '100%';
        this.charts.test.chart.draw(this.charts.test.chartData, this.charts.test.options);

        this.charts.framework.options.width = '100%';
        this.charts.framework.options.height = '100%';
        this.charts.framework.chart.draw(this.charts.framework.chartData, this.charts.framework.options);
    },
    prepareCharts: function () {
        const that = this;
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');

        const techChartWrapper = document.createElement('div');
        const techChartTitle = document.createElement('h3');
        const techChart = document.createElement('div');

        const testChartWrapper = document.createElement('div');
        const testChartTitle = document.createElement('h3');
        const testChart = document.createElement('div');

        const frameworkChartWrapper = document.createElement('div');
        const frameworkChartTitle = document.createElement('h3');
        const frameworkChart = document.createElement('div');

        sectionTitle.textContent = 'Technologies';

        techChartWrapper.id = this.techChartWrapperId;
        techChartTitle.textContent = 'Skills';
        techChart.id = this.techChartId;
        techChartWrapper.appendChild(techChartTitle);
        techChartWrapper.appendChild(techChart);

        testChartWrapper.id = this.testChartWrapperId;
        testChartTitle.textContent = 'Testing (one of)';
        testChart.id = this.testChartId;
        testChartWrapper.appendChild(testChartTitle);
        testChartWrapper.appendChild(testChart);

        frameworkChartWrapper.id = this.frameworkChartWrapperId;
        frameworkChartTitle.textContent = 'Frameworks (one of)';
        frameworkChart.id = this.frameworkChartId;
        frameworkChartWrapper.appendChild(frameworkChartTitle);
        frameworkChartWrapper.appendChild(frameworkChart);

        wrapper.appendChild(sectionTitle);
        wrapper.appendChild(techChartWrapper);
        wrapper.appendChild(testChartWrapper);
        wrapper.appendChild(frameworkChartWrapper);

        return wrapper;
    },
    drawCharts: function(data) {
        this.drawTechChart(data);
        this.drawTestChart(data);
        this.drawFrameworkChart(data);
    },
    drawTechChart: function (data) {
        const chart = this.charts.tech;
        const that = this;
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            that.charts.tech.chartData = google.visualization.arrayToDataTable([
                ['Technology', 'Level', { role: 'style' }],
                ['CSS3', LevelResources()[data.css3], languageColors['CSS']],
                ['HTML5', LevelResources()[data.html5], languageColors['HTML']],
                ['JavaScript', LevelResources()[data.javascript], languageColors['JavaScript']],
                ['Node', LevelResources()[data.node], languageColors['Node']],
                ['REST API', LevelResources()[data.rest], languageColors['REST API']],
                ['UI/UX', LevelResources()[data.uiux], languageColors['UI/UX']],
                ['Design', LevelResources()[data.design], languageColors['Design']],
                ['Boardgames', LevelResources()[data.boardgames], languageColors['Boardgames']]
            ]);
            chart.options.hAxis = {
                ticks: [{ v: 0, f: '' }, { v: 1, f: 'Familiar' }, { v: 2, f: 'Good' }, { v: 3, f: 'Expert' }]
            };
            chart.options.height = 300;
            chart.chart = new google.visualization.BarChart(document.getElementById(that.techChartId));
            chart.chart.draw(chart.chartData, chart.options);
        }
    },
    drawTestChart: function (data) {
        const chart = this.charts.test;
        const that = this;
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            chart.chartData = google.visualization.arrayToDataTable([
                ['Testing', 'Level', { role: 'style' }],
                ['JUnit', LevelResources()[data.testing.oneof.junit], languageColors['JUnit']],
                ['Mocha', LevelResources()[data.testing.oneof.mocha], languageColors['Mocha']],
                ['Jasmine', LevelResources()[data.testing.oneof.jasmine], languageColors['Jasmine']],
                ['Selenium', LevelResources()[data.testing.oneof.selenium], languageColors['Selenium']]
            ]);
            chart.options.hAxis = {
                ticks: [{ v: 0, f: '' }, { v: 1, f: 'Familiar' }, { v: 2, f: 'Good' }, { v: 3, f: 'Expert' }]
            };
            chart.chart = new google.visualization.BarChart(document.getElementById(that.testChartId));
            chart.chart.draw(chart.chartData, chart.options);
        }
    },
    drawFrameworkChart: function (data) {
        const chart = this.charts.framework;
        const that = this;
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            chart.chartData = google.visualization.arrayToDataTable([
                ['Framework', 'Level', { role: 'style' }],
                ['React', LevelResources()[data.framework.oneof.react], languageColors['React']],
                ['Vue', LevelResources()[data.framework.oneof.vue], languageColors['Vue']],
                ['Angular', LevelResources()[data.framework.oneof.angular], languageColors['Angular']]
            ]);
            chart.options.hAxis = {
                ticks: [{ v: 0, f: '' }, { v: 1, f: 'Familiar' }, { v: 2, f: 'Good' }, { v: 3, f: 'Expert' }]
            };
            chart.chart = new google.visualization.BarChart(document.getElementById(that.frameworkChartId));
            chart.chart.draw(chart.chartData, chart.options);
        }
    }
};

// TODO
// move chart to material charts
// fix title