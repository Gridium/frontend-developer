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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__(2);



function Ctrl() {
    this.container = document.getElementById('job');
    this.displayJob();
}

Ctrl.fn = Ctrl.prototype;

Ctrl.fn.displayJob = function() {
    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["b" /* title */].render(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* job */].headline))
    this.container.appendChild(__WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* essentials */].render(__WEBPACK_IMPORTED_MODULE_0__job__["b" /* job */].essentials))
}

window.addEventListener('DOMContentLoaded', function() {
    const ctrl = new Ctrl();
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CompanySizeResources;
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
}
/* harmony export (immutable) */ __webpack_exports__["b"] = job;


function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
function ExperienceLevels() { return enumerate("Junior", "Seasoned", "Lead", "GrayBeard"); }
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
function CompanySizeResources() {
    return mapEnumToResources(
        CompanySize(),
        ["Less than 10", "10 to 20", "20 to 50", "50 to 200", "200+"]
    ); 
}
function VersionControlSystem() { return enumerate("NotYetChosen", "Git", "BitBucket"); }
function IssueTrackers() { return enumerate("NotYetChosen", "GitHub", "Jira", "Tikkit"); }
function BuildServers() { return enumerate("NotYetChosen", "Jenkins", "Travis", "Codeship", "CircleCI"); }
function CodeAnalysisTools() { return enumerate("NotYetChosen", "ESLint"); }
function KnowledgeRepos() { return enumerate("NotYetChosen", "GitHubWiki", "Confluence"); }
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); }
function ScheduleOptions() { return enumerate("Fixed", "Flexible"); }
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); }
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); }
function OperationSystems() { return enumerate("MacOSX", "CentOS", "Ubuntu", "Windows"); }
function MachineType() { return enumerate("Workstation", "Laptop"); }
function Monitors() { return enumerate("Negotiable"); }
function Level() { return enumerate("Familiar", "Good", "Expert"); }
function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); }
function PTO() { return enumerate("Accrued", "Unlimited") }

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
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__title__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__essentials__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__essentials__["a"]; });



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(7);



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
/* 4 */,
/* 5 */,
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createRow = (label, text) => {
    const rowNode = document.createElement('li');
    const labelNode = document.createElement('span');
    const textNode = document.createElement('span');
    labelNode.textContent = `${label}: `;
    labelNode.className = 'label';
    textNode.textContent = text;
    rowNode.appendChild(labelNode);
    rowNode.appendChild(textNode);
    return rowNode;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = createRow;


/***/ })
/******/ ]);