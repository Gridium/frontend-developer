/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);


const jobs = [{
    "headline": "Gridium Front-end Developer",
    "essentials": {
        "locations": "denver",
        "position": "Front-end Developer",
        "employment": EmploymentType().Permanent,
        "experience": [ExperienceLevels().Junior, ExperienceLevels().Seasoned],
        "startdate": (new Date()).getTime(),
        "companysize": CompanySize().TenToTwenty,
        "teamsize": { "min": 1, "max": 6 },
    },
    "methodology": {
        "code_reviews": true,
        "prototyping": true,
        "fail_fast": true,
        "unit_testing": true,
        "integration_tests": true,
        "build_server": BuildServers().CircleCI,
        "static_code_analysis": CodeAnalysisTools().NotYetChosen,
        "version_control": VersionControlSystem().Git,
        "issue_tracker": IssueTrackers().Tikkit,
        "standups": true,
        "quick_start": true,
        "commit_on_day_one": true,
    },
    "specs": {
        "workload": 1.0,
        "workweek": 40,
        "schedule": ScheduleOptions().Flexible,
        "remote": RemoteWorking().Required,
        "pto": PTO().Unlimited
    },
    "profile": {
        "newfeatures": 50,
        "clientsupport": 9,
        "documentation": 10,
        "maintenance": 30,
        "meetings": 1,
    },
    "equipment": {
        "operatingsystem": [OperationSystems().MacOSX, OperationSystems().CentOS],
        "computer": MachineType().Laptop,
    },
    "technologies": {
        "CSS": Level().Good,
        "HTML": Level().Good,
        "JavaScript": Level().Good,
        "Node": Level().Good,
        "REST": Level().Good,
        "UI/UX": Level().Familiar,
        "Design": Level().Familiar,
        "testing": {
            "nested": true,
            "oneof": {
                "JUnit": Level().Good,
                "Mocha": Level().Good,
                "Jasmine": Level().Good,
                "Selenium": Level().Good,
            }
        },
        "framework": {
            "nested": true,
            "oneof": {
                "React": Level().Familiar,
                "Vue": Level().Familiar,
                "Angular": Level().Familiar,
            }
        },
        "Boardgames": Level().Familiar,
    },
    "other": [
        "we love technology",
        "we solve interesting problems"
    ],
    "apply": "https://gridium.com/about/working-at-gridium/"
}];
/* harmony export (immutable) */ __webpack_exports__["c"] = jobs;


function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); };
function ExperienceLevels() { return enumerate("Junior", "Seasoned", "Lead", "GrayBeard"); };
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); };
const CompanySizeResources = () => mapEnumToResources(
    CompanySize(),
    ["Less than 10", "10 to 20", "20 to 50", "50 to 200", "200+"]
);
/* harmony export (immutable) */ __webpack_exports__["a"] = CompanySizeResources;

function VersionControlSystem() { return enumerate(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen, "Git", "BitBucket"); };
function IssueTrackers() { return enumerate(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen, "GitHub", "Jira", "Tikkit"); };
function BuildServers() { return enumerate(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen, "Jenkins", "Travis", "Codeship", "CircleCI"); };
function CodeAnalysisTools() { return enumerate(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen, "ESLint"); };
function KnowledgeRepos() { return enumerate(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen, "GitHubWiki", "Confluence"); };
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); };
function ScheduleOptions() { return enumerate("Fixed", "Flexible"); };
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); };
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); };
function OperationSystems() { return enumerate("MacOSX", "CentOS", "Ubuntu", "Windows"); };
function MachineType() { return enumerate("Workstation", "Laptop"); };
function Monitors() { return enumerate("Negotiable"); };
function Level() { return enumerate("Familiar", "Good", "Expert"); };
const LevelResources = () => mapEnumToResources(
    Level(),
    [1, 2, 3]
);
/* harmony export (immutable) */ __webpack_exports__["b"] = LevelResources;

function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); };
function PTO() { return enumerate("Accrued", "Unlimited") };

// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { var v = arguments; var s = { all: [], keys: v }; for (var i = v.length; i--;)s[v[i]] = s.all[i] = v[i]; return s };

function mapEnumToResources(enumerator, resources) {
    if (enumerator.all.length !== resources.length) {
        return {};
    }
    let map = {};
    for (let i = 0; i < enumerator.all.length; i++) {
        map[enumerator.all[i]] = resources[i];
    }
    return map;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createRow = (label, content) => {
    const rowNode = document.createElement('li');
    const labelNode = document.createElement('span');
    const contentNode = document.createElement('span');
    labelNode.textContent = `${label} `;
    labelNode.className = 'label';
    contentNode.innerHTML = content;
    rowNode.appendChild(labelNode);
    rowNode.appendChild(contentNode);
    return rowNode;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = createRow;


const keyToLabel = key => 
  key.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
/* harmony export (immutable) */ __webpack_exports__["b"] = keyToLabel;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const constants = {
    notYetChosen: 'NotYetChosen'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = constants;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__title__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intro__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__intro__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__essentials__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__essentials__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methodology__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__methodology__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specs__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__specs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__profile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equipment__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__equipment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__technologies__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__technologies__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__other__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__other__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apply__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__apply__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jobsList__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__jobsList__["a"]; });












/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jobs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__(3);



function Ctrl() {
    this.jobsList = document.getElementById('jobs');
    this.job = document.getElementById('job');
    this.displayJobsList(__WEBPACK_IMPORTED_MODULE_0__jobs__["c" /* jobs */].map(el => el.headline));
    this.addJobsListEvents();
};

Ctrl.fn = Ctrl.prototype;

Ctrl.fn.displayJobsList = function (data) {
    this.jobsList.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["e" /* jobsList */].render(data));
}

Ctrl.fn.addJobsListEvents = function() {
    const jobsList = document.querySelectorAll('[data-job]');
    jobsList.forEach(job => job.addEventListener(
        'click', this.triggerJob.bind(this)
    ));
}

Ctrl.fn.triggerJob = function(e) {
    this.clearJob();
    this.displayJob(__WEBPACK_IMPORTED_MODULE_0__jobs__["c" /* jobs */][e.target.dataset.job]);
}

Ctrl.fn.displayJob = function (data) {
    this.job.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["k" /* title */].render(data.headline));
    this.job.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["d" /* intro */].render(data));
    this.job.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* apply */].render(data.apply));
    const columnsWrapper = document.createElement('div');
    columnsWrapper.className = 'column-wrapper';
    columnsWrapper.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["h" /* profile */].prepareCharts());
    __WEBPACK_IMPORTED_MODULE_1__components_index__["h" /* profile */].drawCharts(data.profile);
    columnsWrapper.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["f" /* methodology */].render(data.methodology));
    this.job.appendChild(columnsWrapper);
    this.job.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["j" /* technologies */].prepareCharts(data.technologies));
    __WEBPACK_IMPORTED_MODULE_1__components_index__["j" /* technologies */].drawCharts(data.technologies);
    this.job.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["g" /* other */].render(data.other));
    this.job.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* apply */].render(data.apply));
}

Ctrl.fn.clearJob = function() {
    this.job.innerHTML = '';
}

window.addEventListener('DOMContentLoaded', function () {
    const ctrl = new Ctrl();
});

// Listen for window resize and resize the charts accordingly
let throttler;
window.onresize = function () {
    clearTimeout(throttler);
    throttler = setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_1__components_index__["h" /* profile */].resizeDone();
        __WEBPACK_IMPORTED_MODULE_1__components_index__["j" /* technologies */].resizeDone();
    }, 100);
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const title = {
    render: function(data) {
        const titleNode = document.createElement('h1');
        titleNode.textContent = data;
        return titleNode;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = title;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);


const intro = {
    render: function(data) {
        const wrapper = document.createElement('div');
        wrapper.appendChild(__WEBPACK_IMPORTED_MODULE_0__index__["c" /* essentials */].render(data.essentials));
        wrapper.appendChild(__WEBPACK_IMPORTED_MODULE_0__index__["i" /* specs */].render(data.specs));
        wrapper.appendChild(__WEBPACK_IMPORTED_MODULE_0__index__["b" /* equipment */].render(data.equipment));
        
        const text = document.createElement('p');
        text.textContent = 'Do you like what you are seeing? Read on and see if your skills match with what we are looking for!';
        wrapper.appendChild(text);
        return wrapper;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = intro;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jobs__ = __webpack_require__(0);


const essentials = {
    render: function(data) {
        const location = data.locations[0].toUpperCase() + data.locations.slice(1);
        const experience = data.experience.map(el => `<strong>${el}</strong>`).join('/');
        const startDate = new Date(data.startdate)
        const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const teamSize = data.teamsize.max === data.teamsize.min 
            ? data.teamsize.max 
            : `${data.teamsize.min} - ${data.teamsize.max}`;

        const wrapper = document.createElement('div');
        const text = document.createElement('div');
        text.innerHTML = `<p>Our company is located in ${location} and we are looking for a 
        ${experience} <strong>${data.position}</strong> for a ${data.employment.toLowerCase()} 
        position. Starting date: ${startDate.toLocaleDateString('en-US', dateOptions)}</p>
        <p>Gridium has ${Object(__WEBPACK_IMPORTED_MODULE_0__jobs__["a" /* CompanySizeResources */])()[data.companysize]} employees and you will be 
        working in a team of ${teamSize} people.</p>`;
        wrapper.appendChild(text);

        return wrapper;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = essentials;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(1);



const methodology = {
    container: null,
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        this.container = document.createElement('ul');
        sectionTitle.textContent = 'How we do things';
        wrapper.id = 'methodology';
        wrapper.appendChild(sectionTitle);
        Object.keys(data).forEach(key => {
            if (typeof data[key] === typeof true) {
                this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* keyToLabel */])(key), data[key] ? '✅' : '❌'));
            } else if (data[key] !== __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen) {
                this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* keyToLabel */])(key), `with ${data[key]}`));
            }
        });
        wrapper.appendChild(this.container);
        return wrapper;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = methodology;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const specs = {
    render: function(data) {
        const wrapper = document.createElement('div');
        const text = document.createElement('p');
        const remote = data.remote === 'No' ? 'not possible' : data.remote.toLowerCase();
        
        text.innerHTML = `We are looking for people available to work ${data.workweek} 
        hours per week, with a ${data.schedule.toLowerCase()} schedule. Remote working is 
        ${remote} and personal time off is ${data.pto.toLowerCase()}.`;
        wrapper.appendChild(text);

        return wrapper;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = specs;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const profile = {
    chart: {
        chart: null,
        chartData: null,
        options: {
            pieHole: 0.4,
            legend: { position: 'top', maxLines: 10 }
        },
    },
    profileChartWrapperId: 'profile_chart_wrapper',
    profileChartId: 'profile_chart',
    resizeDone: function() {
        this.chart.options.width = '100%';
        this.chart.options.height = '100%';
        this.chart.chart.draw(this.chart.chartData, this.chart.options);
    },
    prepareCharts: function () {
        const that = this;
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        const profileChartWrapper = document.createElement('div');
        const profileChart = document.createElement('div');
        wrapper.id = 'profile';
        sectionTitle.textContent = 'What you will do';
        profileChartWrapper.id = this.profileChartWrapperId;
        profileChart.id = this.profileChartId;
        profileChartWrapper.classList = 'chart';
        profileChart.style.maxHeight = '300px';
        
        profileChartWrapper.appendChild(profileChart);
        wrapper.appendChild(sectionTitle);
        wrapper.appendChild(profileChartWrapper);

        return wrapper;
    },
    drawCharts: function (data) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = profile;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const equipment = {
    render: function(data) {
        const wrapper = document.createElement('div');
        const text = document.createElement('p');

        text.innerHTML = `We all use ${data.computer}s with ${data.operatingsystem.join(' or ')} installed.`;

        wrapper.appendChild(text);
        return wrapper;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = equipment;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jobs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languageColors__ = __webpack_require__(13);




const technologies = {
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
    prepareCharts: function (data) {
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

        sectionTitle.textContent = 'Developer Profile';

        techChartWrapper.id = this.techChartWrapperId;
        techChartWrapper.classList = 'chart';
        techChartTitle.textContent = data.oneof ? 'Skills (one of)' : 'Skills';
        techChart.id = this.techChartId;
        techChartWrapper.appendChild(techChartTitle);
        techChartWrapper.appendChild(techChart);

        testChartWrapper.id = this.testChartWrapperId;
        testChartWrapper.classList = 'chart';
        testChartTitle.textContent = data.testing.oneof ? 'Testing (one of)' : 'Testing';
        testChart.id = this.testChartId;
        testChartWrapper.appendChild(testChartTitle);
        testChartWrapper.appendChild(testChart);

        frameworkChartWrapper.id = this.frameworkChartWrapperId;
        frameworkChartWrapper.classList = 'chart';
        frameworkChartTitle.textContent = data.framework.oneof ? 'Frameworks (one of)' : 'Frameworks';
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
            const chartData = [['Technology', 'Level', { role: 'style' }]];
            Object.keys(data).filter(key => !data[key].nested).forEach(key => {
                chartData.push([key, Object(__WEBPACK_IMPORTED_MODULE_0__jobs__["b" /* LevelResources */])()[data[key]], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */][key]]);
            });
            that.charts.tech.chartData = google.visualization.arrayToDataTable(chartData);
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
            const chartData = [['Testing', 'Level', { role: 'style' }]];
            const testing = data.testing.oneof ? data.testing.oneof : data.testing;
            Object.keys(testing).forEach(key => {
                chartData.push([key, Object(__WEBPACK_IMPORTED_MODULE_0__jobs__["b" /* LevelResources */])()[testing[key]], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */][key]]);
            });
            chart.chartData = google.visualization.arrayToDataTable(chartData);
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
          const chartData = [['Framework', 'Level', { role: 'style' }]];
          const framework = data.framework.oneof ? data.framework.oneof : data.framework;
          Object.keys(framework).forEach(key => {
              chartData.push([key, Object(__WEBPACK_IMPORTED_MODULE_0__jobs__["b" /* LevelResources */])()[framework[key]], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */][key]]);
          });
          chart.chartData = google.visualization.arrayToDataTable(chartData);
            chart.options.hAxis = {
                ticks: [{ v: 0, f: '' }, { v: 1, f: 'Familiar' }, { v: 2, f: 'Good' }, { v: 3, f: 'Expert' }]
            };
            chart.chart = new google.visualization.BarChart(document.getElementById(that.frameworkChartId));
            chart.chart.draw(chart.chartData, chart.options);
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = technologies;


// TODO
// move chart to material charts
// fix title

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://raw.githubusercontent.com/doda/github-language-colors/master/colors.json
const languageColors = {
    "Mercury": "#ff2b2b",
    "TypeScript": "#2b7489",
    "PureBasic": "#5a6986",
    "Objective-C++": "#6866fb",
    "Self": "#0579aa",
    "edn": "#db5855",
    "NewLisp": "#87AED7",
    "Jupyter Notebook": "#DA5B0B",
    "Rebol": "#358a5b",
    "Frege": "#00cafe",
    "Dart": "#00B4AB",
    "AspectJ": "#a957b0",
    "Shell": "#89e051",
    "Web Ontology Language": "#9cc9dd",
    "xBase": "#403a40",
    "Eiffel": "#946d57",
    "Nix": "#7e7eff",
    "RAML": "#77d9fb",
    "MTML": "#b7e1f4",
    "Racket": "#22228f",
    "Elixir": "#6e4a7e",
    "SAS": "#B34936",
    "Agda": "#315665",
    "wisp": "#7582D1",
    "D": "#ba595e",
    "Kotlin": "#F18E33",
    "Opal": "#f7ede0",
    "Crystal": "#776791",
    "Objective-C": "#438eff",
    "ColdFusion CFC": "#ed2cd6",
    "Oz": "#fab738",
    "Mirah": "#c7a938",
    "Objective-J": "#ff0c5a",
    "Gosu": "#82937f",
    "FreeMarker": "#0050b2",
    "Ruby": "#701516",
    "Component Pascal": "#b0ce4e",
    "Arc": "#aa2afe",
    "Brainfuck": "#2F2530",
    "Nit": "#009917",
    "APL": "#5A8164",
    "Go": "#375eab",
    "Visual Basic": "#945db7",
    "PHP": "#4F5D95",
    "Cirru": "#ccccff",
    "SQF": "#3F3F3F",
    "Glyph": "#e4cc98",
    "Java": "#b07219",
    "MAXScript": "#00a6a6",
    "Scala": "#DC322F",
    "Makefile": "#427819",
    "ColdFusion": "#ed2cd6",
    "Perl": "#0298c3",
    "Lua": "#000080",
    "Vue": "#2c3e50",
    "Verilog": "#b2b7f8",
    "Factor": "#636746",
    "Haxe": "#df7900",
    "Pure Data": "#91de79",
    "Forth": "#341708",
    "Red": "#ee0000",
    "Hy": "#7790B2",
    "Volt": "#1F1F1F",
    "LSL": "#3d9970",
    "eC": "#913960",
    "CoffeeScript": "#244776",
    "HTML": "#e44b23",
    "Lex": "#DBCA00",
    "API Blueprint": "#2ACCA8",
    "Swift": "#ffac45",
    "C": "#555555",
    "AutoHotkey": "#6594b9",
    "Isabelle": "#FEFE00",
    "Metal": "#8f14e9",
    "Clarion": "#db901e",
    "JSONiq": "#40d47e",
    "Boo": "#d4bec1",
    "AutoIt": "#1C3552",
    "Clojure": "#db5855",
    "Rust": "#dea584",
    "Prolog": "#74283c",
    "SourcePawn": "#5c7611",
    "AMPL": "#E6EFBB",
    "FORTRAN": "#4d41b1",
    "ANTLR": "#9DC3FF",
    "Harbour": "#0e60e3",
    "Tcl": "#e4cc98",
    "BlitzMax": "#cd6400",
    "PigLatin": "#fcd7de",
    "Lasso": "#999999",
    "ECL": "#8a1267",
    "VHDL": "#adb2cb",
    "Elm": "#60B5CC",
    "Propeller Spin": "#7fa2a7",
    "X10": "#4B6BEF",
    "IDL": "#a3522f",
    "ATS": "#1ac620",
    "Ada": "#02f88c",
    "Unity3D Asset": "#ab69a1",
    "Nu": "#c9df40",
    "LFE": "#004200",
    "SuperCollider": "#46390b",
    "Oxygene": "#cdd0e3",
    "ASP": "#6a40fd",
    "Assembly": "#6E4C13",
    "Gnuplot": "#f0a9f0",
    "JFlex": "#DBCA00",
    "NetLinx": "#0aa0ff",
    "Turing": "#45f715",
    "Vala": "#fbe5cd",
    "Processing": "#0096D8",
    "Arduino": "#bd79d1",
    "FLUX": "#88ccff",
    "NetLogo": "#ff6375",
    "C Sharp": "#178600",
    "CSS": "#563d7c",
    "Emacs Lisp": "#c065db",
    "Stan": "#b2011d",
    "SaltStack": "#646464",
    "QML": "#44a51c",
    "Pike": "#005390",
    "LOLCODE": "#cc9900",
    "ooc": "#b0b77e",
    "Handlebars": "#01a9d6",
    "J": "#9EEDFF",
    "Mask": "#f97732",
    "EmberScript": "#FFF4F3",
    "TeX": "#3D6117",
    "Nemerle": "#3d3c6e",
    "KRL": "#28431f",
    "Ren'Py": "#ff7f7f",
    "Unified Parallel C": "#4e3617",
    "Golo": "#88562A",
    "Fancy": "#7b9db4",
    "OCaml": "#3be133",
    "Shen": "#120F14",
    "Pascal": "#b0ce4e",
    "F#": "#b845fc",
    "Puppet": "#302B6D",
    "ActionScript": "#882B0F",
    "Diff": "#88dddd",
    "Ragel in Ruby Host": "#9d5200",
    "Fantom": "#dbded5",
    "Zephir": "#118f9e",
    "Click": "#E4E6F3",
    "Smalltalk": "#596706",
    "DM": "#447265",
    "Ioke": "#078193",
    "PogoScript": "#d80074",
    "LiveScript": "#499886",
    "JavaScript": "#f1e05a",
    "VimL": "#199f4b",
    "PureScript": "#1D222D",
    "ABAP": "#E8274B",
    "Matlab": "#bb92ac",
    "Slash": "#007eff",
    "R": "#198ce7",
    "Erlang": "#B83998",
    "Pan": "#cc0000",
    "LookML": "#652B81",
    "Eagle": "#814C05",
    "Scheme": "#1e4aec",
    "PLSQL": "#dad8d8",
    "Python": "#3572A5",
    "Max": "#c4a79c",
    "Common Lisp": "#3fb68b",
    "Latte": "#A8FF97",
    "XQuery": "#5232e7",
    "Omgrofl": "#cabbff",
    "XC": "#99DA07",
    "Nimrod": "#37775b",
    "SystemVerilog": "#DAE1C2",
    "Chapel": "#8dc63f",
    "Groovy": "#e69f56",
    "Dylan": "#6c616e",
    "E": "#ccce35",
    "Parrot": "#f3ca0a",
    "Grammatical Framework": "#79aa7a",
    "Game Maker Language": "#8fb200",
    "Papyrus": "#6600cc",
    "NetLinx+ERB": "#747faa",
    "Clean": "#3F85AF",
    "Alloy": "#64C800",
    "Squirrel": "#800000",
    "PAWN": "#dbb284",
    "UnrealScript": "#a54c4d",
    "Standard ML": "#dc566d",
    "Slim": "#ff8f77",
    "Perl6": "#0000fb",
    "Julia": "#a270ba",
    "Haskell": "#29b544",
    "NCL": "#28431f",
    "Io": "#a9188d",
    "Rouge": "#cc0088",
    "cpp": "#f34b7d",
    "AGS Script": "#B9D9FF",
    "Dogescript": "#cca760",
    "nesC": "#94B0C7",
    "Node": "#689E66",
    "REST API": "#d80074",
    "UI/UX": "#199f4b",
    "Design": "#fbe5cd",
    "Boardgames": "#0000fb",
    "React": "#56D5FA",
    "Angular": "#D8002C",
    "JUnit": "#f97732",
    "Selenium": "#232F49",
    "Mocha": "#7F583B",
    "Jasmine": "#7F3977"
  };
/* harmony export (immutable) */ __webpack_exports__["a"] = languageColors;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const other = {
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        const sectionText = document.createElement('p');
        sectionTitle.textContent = 'Why join us?';
        const textContent = data.join(' & ');
        sectionText.textContent = textContent[0].toUpperCase() + textContent.slice(1);
        wrapper.appendChild(sectionTitle);
        wrapper.appendChild(sectionText);
        return wrapper;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = other;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const apply = {
    render: function(data) {
        const button = document.createElement('a');
        button.classList = 'btn btn-cta';
        button.textContent = 'Apply';
        button.href = data;
        button.target = '_blank';
        return button;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = apply;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(1);


const jobsList = {
    container: null,
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const title = document.createElement('h1');
        const text = document.createElement('p');
        this.container = document.createElement('ul');
        title.textContent = 'Welcome to the Gridium developers job boards!';
        text.textContent = 'Browse all new opportunities and find the job that match your skills.';

        (data.forEach((el, i) => {
            this.container.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* createRow */])('', `<h2><a data-job=${i} href="#">${el} ›</a></h2>`))
        }));

        wrapper.appendChild(title);
        wrapper.appendChild(text);
        wrapper.appendChild(this.container);
        return wrapper;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = jobsList;


/***/ })
/******/ ]);