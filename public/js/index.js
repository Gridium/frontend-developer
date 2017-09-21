
var job = {
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

function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
function ExperienceLevels() { return enumerate("Junior", "Seasoned", "Lead", "GrayBeard"); }
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
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

console.log(PTO())

// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v=arguments;s={all:[],keys:v};for(i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };

app.controller("HomeCtrl", function($scope) {

    // random names for an applicant
    randomNamesArray = [
        "Penelope Davenport",
        "Kailyn Camacho",
        "Kaley Luna",
        "Jon Ortega",
        "Anne Flowers",
        "Hanna Cannon",
        "Ean Rowland",
        "Nathan Stanley",
        "Caitlyn Walsh",
        "Giuliana Stout",
        "Jaylah Gutierrez",
        "Addyson Ali",
        "Bradyn Ferguson",
        "Rory Clarke",
        "Andres Hamilton",
        "Jonas Massey",
        "Jamar Weber",
        "Ivy Odom",
        "Douglas Pearson",
        "Giancarlo Bentley"
    ];

    // function to pick an element from an array at random
    var getRandomElement = function(elementArray) {
        var randomElement = elementArray[Math.floor(Math.random() * elementArray.length)];
        return randomElement;
    };

    $scope.job = job;

    var compareApplicantWithGridium = function(applicant) {
        var gridium = $scope.job;
        // starting score for applicant
        var score = 0;
        if (gridium.essentials.employment === applicant.essentials.employment) {
            score += 1;
        } if (gridium.essentials.experience === applicant.essentials.experience) {
            score += 1;
        };
        console.log("the applicant score is ", score);
        return score;
    };


    // my profile
    $scope.me = {
        "name": "William O. Caldwell",
        "essentials": {
            "employment": EmploymentType().Permanent,
            "experience": ExperienceLevels().Junior,
        },
        "specs": {
            "schedule": ScheduleOptions().Flexible,
            "remote": RemoteWorking().Required,
            "pto": PTO().Unlimited,
        },
        "equipment": {
            "operatingsystem": OperationSystems().MacOSX,
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
                    "junit": Level().Familiar,
                    "mocha": Level().Familiar,
                    "jasmine": Level().Familiar,
                    "selenium": Level().Familiar,
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
        }
    };

    // make a random applicant profile
    $scope.randomApplicant = {
        "name": getRandomElement(randomNamesArray),
        "essentials": {
            "employment": getRandomElement(EmploymentType().all),
            "experience": getRandomElement(ExperienceLevels().all)
        },
        "specs": {
            "schedule": getRandomElement(ScheduleOptions().all),
            "remote": getRandomElement(RemoteWorking().all),
            "pto": getRandomElement(PTO().all)
        },
        "equipment": {
            "operatingsystem": getRandomElement(OperationSystems().all),
            "computer": getRandomElement(MachineType().all),
        },
        "technologies": {
            "css3": getRandomElement(Level().all),
            "html5": getRandomElement(Level().all),
            "javascript": getRandomElement(Level().all),
            "node": getRandomElement(Level().all),
            "rest": getRandomElement(Level().all),
            "uiux": getRandomElement(Level().all),
            "design": getRandomElement(Level().all),
            "testing": {
                "oneof": {
                    "junit": getRandomElement(Level().all),
                    "mocha": getRandomElement(Level().all),
                    "jasmine": getRandomElement(Level().all),
                    "selenium": getRandomElement(Level().all),
                }
            },
            "framework": {
                "oneof": {
                    "react": getRandomElement(Level().all),
                    "vue": getRandomElement(Level().all),
                    "angular": getRandomElement(Level().all),
                }
            },
            "boardgames": getRandomElement(Level().all)
        }
    };

    $scope.contestArray = [
        $scope.me,
        $scope.randomApplicant

    ];

    $scope.myScore = compareApplicantWithGridium($scope.me);
    $scope.otherScore = compareApplicantWithGridium($scope.randomApplicant);

    console.log("me ", $scope.myScore, " them ", $scope.otherScore);

    if ($scope.myScore > $scope.otherScore) {
        $scope.winner = $scope.me.name;
    } if ($scope.otherScore > $scope.myScore) {
        $scope.winner = $scope.randomApplicant.name;
    } if ($scope.otherScore === $scope.myScore){
        $scope.winner = "It's a tie! Hire us both!!"
    };
});
