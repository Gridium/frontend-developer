var app = angular.module("GridiumApp", []);

// App Controller
app.controller("GridiumController", function ($scope) {

	$scope.headline = job.headline;
	$scope.essentials = job.essentials;
	$scope.methodology = job.methodology;
	$scope.equipment = job.equipment;
	$scope.profile = job.profile;
	$scope.technologies = job.technologies;
	$scope.others = job.other;
	$scope.specs = job.specs;

	$scope.isString = function(item) {return angular.isString(item)}

});

app.filter('companysize', function() {
	return function(input) {
		input = input || '';

		switch(input) {
			case "LessThanTen":
				return "<10";
				break;
			case "TenToTwenty":
				return "10-20"
				break;
			case "TwentyToFifty":
				return "20-50";
				break;
			case "FiftyToTwoHundred":
				return "50-200"
				break;
			case "MoreThanTwoHundred":
				return ">200"
				break;
			default:
				return ""
		};
	};
});

app.filter('methodname', function() {
	return function(input) {
		input = input || '';

		switch(input) {
			case "codereviews":
				return "Code Reviews";
				break;
			case "prototyping":
				return "Prototyping";
				break;
			case "failfast":
				return "Fail Fast";
				break;
			case "unittests":
				return "Unit Tests";
				break;
			case "integrationtests":
				return "Integration Tests";
				break;
			case "standups":
				return "Standups";
				break;
			case "quickstart":
				return "Quick Start";
				break;
			case "commitondayone":
				return "Commit On Day One";
				break;
			
			case "buildserver":
				return "Build Server";
				break;
			case "staticcodeanalysis":
				return "Static Code Analysis";
				break;
			case "versioncontrol":
				return "Version Control";
				break;
			case "issuetracker":
				return "Issue Tracker";
				break;
			case "knowledgerepos":
				return "Knowledge Repos"
				break;

			default:
				return ""
		};
	};
});

app.filter('gearname', function() {
	return function(input) {
		input = input || '';

		switch(input) {
			case "operatingsystem":
				return "OS";
				break;
			case "computer":
				return "CPU";
				break;
			case "monitors":
				return "Monitors";
				break;
			default:
				return ""
		};
	};
});

app.filter('specsname', function() {
	return function(input) {
		input = input || '';

		switch(input) {
			case "workload":
				return "Work Load";
				break;
			case "workweek":
				return "Hours Per Week"
				break;
			case "schedule":
				return "Schedule";
				break;
			case "remote":
				return "Remote"
				break;
			case "pto":
				return "Paid Time Off"
				break;
			case "traveloptions":
				return "Travel";
				break;
			case "relocation":
				return "Relocation";
				break;
			default:
				return ""
		};
	};
});

app.filter('technologyname', function() {
	return function(input) {
		input = input || '';

		switch(input) {
			case "css3":
				return "CSS3";
				break;
			case "html5":
				return "HTML5"
				break;
			case "javascript":
				return "JavaScript";
				break;
			case "node":
				return "Node"
				break;
			case "rest":
				return "REST"
				break;
			case "uiux":
				return "UI/UX"
				break;
			case "design":
				return "Design"
				break;
			case "testing":
				return "Testing"
				break;
			case "framework":
				return "Framework"
				break;
			case "boardgames":
				return "Board Games"
				break;
			default:
				return ""
		};
	};
});