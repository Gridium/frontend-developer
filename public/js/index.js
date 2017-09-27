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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createRow = (label, content) => {
    const rowNode = document.createElement('li');
    const labelNode = document.createElement('span');
    const contentNode = document.createElement('span');
    labelNode.textContent = `${label}: `;
    labelNode.className = 'label';
    contentNode.innerHTML = content;
    rowNode.appendChild(labelNode);
    rowNode.appendChild(contentNode);
    return rowNode;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = createRow;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);


const job = {
	"headline": "Gridium Front-end Developer",
	"essentials": {
		"locations": "denver",
        "employment": EmploymentType().Permanent,
        "experience": [ExperienceLevels().Junior, ExperienceLevels().Seasoned],
		"startdate": (new Date()).getTime(),
		"companysize": CompanySize().TenToTwenty,
		"teamsize": { "min": 1, "max": 6 },
	},
	"methodology": {
		"codereviews": true,
		"prototyping": true,
		"failfast": true,
		"unittests": true,
		"integrationtests": true,
		"buildserver": BuildServers().CircleCI,
		"staticcodeanalysis": CodeAnalysisTools().NotYetChosen,
		"versioncontrol": VersionControlSystem().Git,
		"issuetracker": IssueTrackers().Tikkit,
		"standups": true,
		"quickstart": true,
		"commitondayone": true,
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
        "css3": Level().Good,
        "html5": Level().Good,
        "javascript": Level().Good,
        "node": Level().Good,
        "rest": Level().Good,
        "uiux": Level().Familiar,
        "design": Level().Familiar,
        "testing": {
            "oneof": {
                "junit": Level().Good,
                "mocha": Level().Good,
                "jasmine": Level().Good,
                "selenium": Level().Good,
            }
        },
        "framework": {
            "oneof": {
                "react": Level().Familiar,
                "vue": Level().Familiar,
                "angular": Level().Familiar,
            }
        },
        "boardgames": Level().Familiar,
    },
	"other": [
        "we love technology",
        "we solve interesting problems"
	]
};
/* harmony export (immutable) */ __webpack_exports__["c"] = job;


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
function enumerate() { var v=arguments;var s={all:[],keys:v};for(var i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };

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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__(4);



function Ctrl() {
    this.container = document.getElementById('job');
    this.displayJob();
};

Ctrl.fn = Ctrl.prototype;

Ctrl.fn.displayJob = function() {
    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["h" /* title */].render(__WEBPACK_IMPORTED_MODULE_0__job__["c" /* job */].headline));
    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["b" /* essentials */].render(__WEBPACK_IMPORTED_MODULE_0__job__["c" /* job */].essentials));
    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["c" /* methodology */].render(__WEBPACK_IMPORTED_MODULE_0__job__["c" /* job */].methodology));
    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["f" /* specs */].render(__WEBPACK_IMPORTED_MODULE_0__job__["c" /* job */].specs));

    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["e" /* profile */].prepareCharts());
    __WEBPACK_IMPORTED_MODULE_1__components_index__["e" /* profile */].drawCharts(__WEBPACK_IMPORTED_MODULE_0__job__["c" /* job */].profile);

    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* equipment */].render(__WEBPACK_IMPORTED_MODULE_0__job__["c" /* job */].equipment));
    
    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["g" /* technologies */].prepareCharts());
    __WEBPACK_IMPORTED_MODULE_1__components_index__["g" /* technologies */].drawCharts(__WEBPACK_IMPORTED_MODULE_0__job__["c" /* job */].technologies);

    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["d" /* other */].render(__WEBPACK_IMPORTED_MODULE_0__job__["c" /* job */].other));
}

window.addEventListener('DOMContentLoaded', function() {
    const ctrl = new Ctrl();
});

// Listen for window resize and resize the charts accordingly
let throttler;
window.onresize = function() {
    clearTimeout(throttler);
    throttler = setTimeout(function() {
        __WEBPACK_IMPORTED_MODULE_1__components_index__["e" /* profile */].resizeDone();
        __WEBPACK_IMPORTED_MODULE_1__components_index__["g" /* technologies */].resizeDone();
    }, 100);
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__title__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__essentials__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__essentials__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__methodology__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__methodology__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specs__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__specs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__profile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipment__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__equipment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__technologies__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__technologies__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__other__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__other__["a"]; });









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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(0);



const essentials = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const startDate = new Date(data.startdate)
        const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const teamSize = data.teamsize.max === data.teamsize.min 
            ? data.teamsize.max 
            : `${data.teamsize.min} - ${data.teamsize.max}`;

        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Location', data.locations[0].toUpperCase() + data.locations.slice(1)));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Contract', data.employment));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Experience', data.experience.join(' OR ')));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Starting date', startDate.toLocaleDateString('en-US', dateOptions)));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Team Size', teamSize));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Company Size', Object(__WEBPACK_IMPORTED_MODULE_0__job__["a" /* CompanySizeResources */])()[data.companysize]));

        return this.container;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = essentials;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(0);



const methodology = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Methodology';
        wrapper.appendChild(sectionTitle);

        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Code Review', data.codereviews ? '✅' : '❌'));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Prototyping', data.prototyping ? '✅' : '❌'));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Unit Testing', data.unittests ? '✅' : '❌'));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Integration Tests', data.integrationtests ? '✅' : '❌'));

        if (data.buildserver !== __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen) {
            this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Server', data.buildserver));
        }
        if (data.staticcodeanalysis !== __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen) {
            this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Code Analysis Tool', data.staticcodeanalysis));
        }
        if (data.versioncontrol !== __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen) {
            this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Version Control', data.versioncontrol));
        }
        if (data.issuetracker !== __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* constants */].notYetChosen) {
            this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Issue Tracker', data.issuetracker));
        }

        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Standups', data.standups ? '✅' : '❌'));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Quick Start', data.quickstart ? '✅' : '❌'));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* createRow */])('Commit on Day 1', data.commitondayone ? '✅' : '❌'));

        wrapper.appendChild(this.container);
        return wrapper;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = methodology;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);


const specs = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Details';
        wrapper.appendChild(sectionTitle);

        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* createRow */])('Workload', data.workload));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* createRow */])('Workweek', `${data.workweek} hours`));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* createRow */])('Schedule', data.schedule));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* createRow */])('Remote', data.remote));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* createRow */])('Personal time off', data.pto));

        wrapper.appendChild(this.container);
        return wrapper;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = specs;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const profile = {
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
    prepareCharts: function () {
        const that = this;
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        const profileChartWrapper = document.createElement('div');
        const profileChart = document.createElement('div');
        
        sectionTitle.textContent = 'Developer Profile';
        profileChartWrapper.id = this.profileChartWrapperId;
        profileChart.id = this.profileChartId;
        profileChart.classList = 'chart';
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);


const equipment = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Equipment';
        wrapper.appendChild(sectionTitle);

        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* createRow */])('Operating System', data.operatingsystem.join(' OR ')));
        this.addRow(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* createRow */])('Computer', data.computer));

        wrapper.appendChild(this.container);
        return wrapper;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = equipment;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languageColors__ = __webpack_require__(12);




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
        techChart.classList = 'chart';
        techChartWrapper.appendChild(techChartTitle);
        techChartWrapper.appendChild(techChart);

        testChartWrapper.id = this.testChartWrapperId;
        testChartTitle.textContent = 'Testing (one of)';
        testChart.id = this.testChartId;
        testChart.classList = 'chart';
        testChartWrapper.appendChild(testChartTitle);
        testChartWrapper.appendChild(testChart);

        frameworkChartWrapper.id = this.frameworkChartWrapperId;
        frameworkChartTitle.textContent = 'Frameworks (one of)';
        frameworkChart.id = this.frameworkChartId;
        frameworkChart.classList = 'chart';
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
                ['CSS3', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.css3], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['CSS']],
                ['HTML5', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.html5], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['HTML']],
                ['JavaScript', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.javascript], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['JavaScript']],
                ['Node', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.node], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['Node']],
                ['REST API', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.rest], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['REST API']],
                ['UI/UX', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.uiux], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['UI/UX']],
                ['Design', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.design], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['Design']],
                ['Boardgames', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.boardgames], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['Boardgames']]
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
                ['JUnit', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.testing.oneof.junit], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['JUnit']],
                ['Mocha', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.testing.oneof.mocha], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['Mocha']],
                ['Jasmine', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.testing.oneof.jasmine], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['Jasmine']],
                ['Selenium', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.testing.oneof.selenium], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['Selenium']]
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
                ['React', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.framework.oneof.react], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['React']],
                ['Vue', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.framework.oneof.vue], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['Vue']],
                ['Angular', Object(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* LevelResources */])()[data.framework.oneof.angular], __WEBPACK_IMPORTED_MODULE_2__languageColors__["a" /* languageColors */]['Angular']]
            ]);
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
/* 12 */
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
/* 13 */,
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


/***/ })
/******/ ]);