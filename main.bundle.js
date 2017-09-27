webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService() {
        this.job = {
            'headline': 'Gridium Front-end Developer',
            'essentials': {
                'locations': 'denver',
                'employment': this.EmploymentType().Permanent,
                'experience': [this.ExperienceLevels().Junior, this.ExperienceLevels().Seasoned],
                'startdate': (new Date()).getTime(),
                'companysize': this.CompanySize().TenToTwenty,
                'teamsize': { 'min': 1, 'max': 6 },
            },
            'methodology': {
                'codereviews': true,
                'prototyping': true,
                'failfast': true,
                'unittests': true,
                'integrationtests': true,
                'buildserver': this.BuildServers().CircleCI,
                'staticcodeanalysis': this.CodeAnalysisTools().NotYetChosen,
                'versioncontrol': this.VersionControlSystem().Git,
                'issuetracker': this.IssueTrackers().Tikkit,
                'standups': true,
                'quickstart': true,
                'commitondayone': true,
            },
            'specs': {
                'workload': 1.0,
                'workweek': 40,
                'schedule': this.ScheduleOptions().Flexible,
                'remote': this.RemoteWorking().Required,
                'pto': this.PTO().Unlimited
            },
            'profile': {
                'newfeatures': 50,
                'clientsupport': 9,
                'documentation': 10,
                'maintenance': 30,
                'meetings': 1,
            },
            'equipment': {
                'operatingsystem': [this.OperationSystems().MacOSX, this.OperationSystems().CentOS],
                'computer': this.MachineType().Laptop,
            },
            'technologies': {
                'css3': this.Level().Good,
                'html5': this.Level().Good,
                'javascript': this.Level().Good,
                'node': this.Level().Good,
                'rest': this.Level().Good,
                'uiux': this.Level().Familiar,
                'design': this.Level().Familiar,
                'testing': {
                    'oneof': {
                        'junit': this.Level().Good,
                        'mocha': this.Level().Good,
                        'jasmine': this.Level().Good,
                        'selenium': this.Level().Good,
                    }
                },
                'framework': {
                    'oneof': {
                        'react': this.Level().Familiar,
                        'vue': this.Level().Familiar,
                        'angular': this.Level().Familiar,
                    }
                },
                'boardgames': this.Level().Familiar,
            },
            'other': [
                'we love technology',
                'we solve interesting problems'
            ]
        };
        this.options = {
            EmploymentType: this.EmploymentType(),
            ExperienceLevels: this.ExperienceLevels(),
            CompanySize: this.CompanySize(),
            VersionControlSystem: this.VersionControlSystem(),
            IssueTrackers: this.IssueTrackers(),
            BuildServers: this.BuildServers(),
            CodeAnalysisTools: this.CodeAnalysisTools(),
            KnowledgeRepos: this.KnowledgeRepos(),
            TravelOptions: this.TravelOptions(),
            ScheduleOptions: this.ScheduleOptions(),
            RemoteWorking: this.RemoteWorking(),
            RelocationPackages: this.RelocationPackages(),
            OperationSystems: this.OperationSystems(),
            MachineType: this.MachineType(),
            Monitors: this.Monitors(),
            Level: this.Level(),
            TrainingType: this.TrainingType(),
            PTO: this.PTO()
        };
    }
    ApiService.prototype.EmploymentType = function () { return this.enumerate('Permanent', 'Temporary', 'Project'); };
    ApiService.prototype.ExperienceLevels = function () { return this.enumerate('Junior', 'Seasoned', 'Lead', 'GrayBeard'); };
    ApiService.prototype.CompanySize = function () { return this.enumerate('LessThanTen', 'TenToTwenty', 'TwentyToFifty', 'FiftyToTwoHundred', 'MoreThanTwoHundred'); };
    ApiService.prototype.VersionControlSystem = function () { return this.enumerate('NotYetChosen', 'Git', 'BitBucket'); };
    ApiService.prototype.IssueTrackers = function () { return this.enumerate('NotYetChosen', 'GitHub', 'Jira', 'Tikkit'); };
    ApiService.prototype.BuildServers = function () { return this.enumerate('NotYetChosen', 'Jenkins', 'Travis', 'Codeship', 'CircleCI'); };
    ApiService.prototype.CodeAnalysisTools = function () { return this.enumerate('NotYetChosen', 'ESLint'); };
    ApiService.prototype.KnowledgeRepos = function () { return this.enumerate('NotYetChosen', 'GitHubWiki', 'Confluence'); };
    ApiService.prototype.TravelOptions = function () { return this.enumerate('None', 'Possible', 'Plentiful'); };
    ApiService.prototype.ScheduleOptions = function () { return this.enumerate('Fixed', 'Flexible'); };
    ApiService.prototype.RemoteWorking = function () { return this.enumerate('No', 'Negotiable', 'Required'); };
    ApiService.prototype.RelocationPackages = function () { return this.enumerate('Nonealse', 'Negotiable'); };
    ApiService.prototype.OperationSystems = function () { return this.enumerate('MacOSX', 'CentOS', 'Ubuntu', 'Windows'); };
    ApiService.prototype.MachineType = function () { return this.enumerate('Workstation', 'Laptop'); };
    ApiService.prototype.Monitors = function () { return this.enumerate('Negotiable'); };
    ApiService.prototype.Level = function () { return this.enumerate('Familiar', 'Good', 'Expert'); };
    ApiService.prototype.TrainingType = function () { return this.enumerate('None', 'Informal', 'Formal', 'External'); };
    ApiService.prototype.PTO = function () { return this.enumerate('Accrued', 'Unlimited'); };
    // https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
    ApiService.prototype.enumerate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var v = args;
        var s = { all: [], keys: v };
        for (var i = v.length; i--;) {
            s[v[i]] = s.all[i] = v[i];
        }
        return s;
    };
    ApiService.prototype.getJob = function () {
        return this.job;
    };
    ApiService.prototype.getOptions = function () {
        return this.options;
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav>\n    <a routerLink=\"/feed\" routerLinkActive=\"active\">Feed</a>\n</nav> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_camel_pipe__ = __webpack_require__("../../../../../src/app/pipes/camel.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_camel_pipe__["a" /* CamelToHumanPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        entryComponents: [],
        providers: [__WEBPACK_IMPORTED_MODULE_8__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headline\">\n  <h1 class=\"text-center\">{{job.headline}}</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"gridium-about\">\n    <h4>What we're about:</h4>\n  </div>\n  <div class=\"container company-size\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Company Size</div>\n      <div class=\"col-sm-6\">{{job.essentials.companysize | camelToHuman}}</div>\n    </div>\n  </div>\n</div>\n<div class=\"row footer\">\n  <div class=\"robot\"></div>\n  <h1 class=\"app-title text-center\">Gridium Job Applicationer</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .row {\n  margin: 0; }\n\n:host .col-md-3, :host .col-md-12 {\n  padding: 0;\n  margin: 0; }\n\n:host .post {\n  background-repeat: no-repeat;\n  height: 500px;\n  background-size: cover;\n  background-position: center center; }\n\n:host .overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  background-color: rgba(255, 114, 0, 0.7);\n  transition: .5s; }\n  :host .overlay .post-text {\n    color: #fff;\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n:host .ind-post:hover .overlay {\n  opacity: 1; }\n\n:host .footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: #e0383c;\n  padding: 35px; }\n\n:host .robot {\n  background: url(\"/assets/images/robot1.png\") no-repeat top left;\n  width: 400px;\n  height: 400px;\n  position: fixed;\n  bottom: 0;\n  right: 0; }\n\n:host .app-title {\n  width: 100%;\n  color: #fff;\n  text-transform: uppercase; }\n  :host .app-title.text-center {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(apiService) {
        this.apiService = apiService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.job = this.apiService.getJob();
        console.log(this.apiService.getJob());
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-home-view',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/camel.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamelToHumanPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelToHumanPipe = (function () {
    function CamelToHumanPipe() {
    }
    CamelToHumanPipe.prototype.transform = function (items) {
        var camelToHuman = function (item) {
            return item.match(/^[a-z]+|[A-Z][a-z]*/g).map(function (x) {
                return x[0].toUpperCase() + x.substr(1).toLowerCase();
            }).join(' ');
        };
        var humanReadable = camelToHuman(items);
        return humanReadable;
    };
    return CamelToHumanPipe;
}());
CamelToHumanPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'camelToHuman'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CamelToHumanPipe);

//# sourceMappingURL=camel.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map