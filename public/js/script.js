var app = angular.module("GridiumApp", []);

// Primary App Controller
app.controller("GridiumController", function ($scope, $http) {
	$scope.content = job;
	$scope.isArray = angular.isArray;
	$scope.isObject = angular.isObject;
	$scope.chartColors = ["#00a1e0","#e2670f","#004177","#7b8c9f","#eaf0f4"];
	$scope.cleanNames = {
		"locations" : "Locations",
		"employment" : "Employment",
		"experience" : "Experience",
		"startdate" : "Start Date",
		"companysize" : "Company Size",
		"teamsize" : "Team Size",
		"codereviews" : "Code Reviews",
		"prototyping" : "Prototyping",
		"failfast" : "Fail Fast",
		"unittests" : "Unit Tests",
		"integrationtests" : "Integration Tests",
		"buildserver" : "Build Server",
		"staticcodeanalysis" : "Static Code Analysis",
		"versioncontrol" : "Version Control",
		"issuetracker" : "Issue Tracker",
		"standups" : "Stand-ups",
		"quickstart" : "Quick Start",
		"commitondayone" : "Commit on Day One",
		"workload" : "Workload",
		"workweek" : "Work Week",
		"schedule" : "Schedule",
		"remote" : "Remote",
		"pto" : "PTO",
		"newfeatures" : "New Features",
		"clientsupport" : "Client Support",
		"documentation" : "Documentation",
		"maintenance" : "Maintenance",
		"meetings" : "Meetings",
		"operatingsystem" : "Operating System",
		"computer" : "Computer",
		"css3" : "CSS3",
		"html5" : "HTML5",
		"javascript" : "JavaScript",
		"node" : "Node",
		"rest" : "Rest",
		"uiux" : "UI/UX",
		"design" : "Design",
		"testing" : "Testing",
		"junit" : "JUnit",
		"mocha" : "Mocha",
		"jasmine" : "Jasmine",
		"selenium" : "Selenium",
		"framework" : "Framework",
		"react" : "React",
		"vue" : "Vue",
		"angular" : "Angular",
		"boardgames" : "Board Games",
	};
});

// Controller to generate Google Map
app.controller("MapController", function ($scope, $element, $timeout) {
	$timeout(function(){ // Use timeout to make sure data is loaded properly
		// Geocode and generate map
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'address': $element.children().html() }, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) { // Geocode successful

				// Generate map
				var map = new google.maps.Map($element.children()[0], {
					zoom: 5,
					center: results[0].geometry.location
				});

				// Place marker
				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
				});
			} else { // Geocode fail
				$element.html('Map Unavailable');
			}
		});
	}, 0);
});

// Controller to generate Pie Charts
app.controller("PieController", function ($scope, $element, $timeout) {
	$timeout(function(){ // Use timeout to make sure data is loaded properly
		var $config = {
			type: "pie",
			data: {
				datasets: [{
					data: Object.values($scope.content[$element.html()]), // Get data values from scope based on the specified section
					backgroundColor: $scope.chartColors
				}],
				labels: Object.keys($scope.content[$element.html()]) // Get data keys from scope based on the specified section
			},
			options: {
				responsive: true,
				legend: false,
				tooltips: {
					callbacks: {
						label: function(tooltipItem, data) {
							return $scope.cleanNames[data.labels[tooltipItem.index]] +": " + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%"; // Add '%' to tooltip
						}
					}
				}
			}
		};
		new Chart($element, $config);
	}, 0);
});

// Controller to generate Bar Charts
app.controller("BarController", function ($scope, $element, $timeout) {
	$timeout(function(){ // Use timeout to make sure data is loaded properly
		var $expLevel = Number(getKeyByValue(Level().keys,$element.html())) + 1; // Convert Level to a numerical value for the chart

		var $config = {
			type: "horizontalBar",
			data: {
				datasets: [{
					data: [$expLevel],
					backgroundColor: $scope.chartColors
				}],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: false,
				layout: {
				padding: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
				}
				},
				scales: {
					xAxes: [{
						type: "linear",
						ticks: {
							min: 0,
							max: 3,
							stepSize: 1,
							callback: function(value, index, values) {
								return index == 0 ? "None" : Level().all[index - 1]; // Display Level options (plus None) across the bottom of the chart
							}
						}
					}]
				},
				tooltips: {
					callbacks: {
						label: function(tooltipItem, data) {
							return Level().all[data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] - 1]; // Convert numerical value to Level text
						}
					}
				}
			}
		};
		new Chart($element, $config);
	}, 0);
});

// Function to retrieve Object key based on value
function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}