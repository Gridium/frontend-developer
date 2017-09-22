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

var titleTranslate = {
    "startdate": "Start date",
    "companysize": "Company size",
    "teamsize": "Team size",
    "codereviews": "Code reviews",
    "failfast": "Fail fast",
    "unittests": "Unit tests",
    "integrationtests": "Integration tests",
    "buildserver": "Build server",
    "staticcodeanalysis": "Static code analysis",
    "versioncontrol": "Version control",
    "issuetracker": "Issue tracker",
    "quickstart": "Quick start",
    "commitondayone": "Commit on day one",
    "workweek": "Work week",
    "newfeatures": "New features",
    "clientsupport": "Client Support",
    "operatingsystem": "Operating system",
}

var companySizeTranslate = {
    "LessThanTen": "Less than 10",
    "TenToTwenty": "10 to 20",
    "TwentyToFifty": "20 to 50",
    "FiftyToTwoHundred": "50 to 200",
    "MoreThanTwoHundred": "More than 200"
}

var staticAnalysisTranslate = {
    "NotYetChosen": "Not yet chosen",
} 

function formatOneOf(obj) {
    var arr = [];
    for (var key in obj.oneof) {
        arr.push(obj.oneof[key]  + ' with ' + toTitleCase(key));
    }
    return arr.join(' or <br>');
}

var valueTranslate = {
    "teamsize": function(value) {
        return value.min + ' to ' + value.max;
    },
    "companysize": function(value) {
        return companySizeTranslate[value];
    },
    "startdate": function(value) {
        var date = new Date();
        date.setTime(value);
        return date.toLocaleDateString();
    },
    "staticcodeanalysis": function(value) {
        return staticAnalysisTranslate[value];
    },
    "testing": formatOneOf,
    "framework": formatOneOf
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

// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v=arguments;s={all:[],keys:v};for(i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };


console.log(job.technologies.testing);


function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function jobDescription(obj, heading) {
    var titleHeading = toTitleCase(heading);
    var result = '';
    result += '<div class="head">' +
                '<thead>' +
                    `<tr><p class="headTitle">${titleHeading}<p></tr>`+
                '</thead>';
    for (var title in obj) {
        var titleCase;

        if(titleTranslate.hasOwnProperty(title)) {
            titleCase = titleTranslate[title];
        } else {
            titleCase = toTitleCase(title);
        }

        if(obj[title]) {
            result += `<div class="col-group ${heading}">` +
                            '<table>' +
                                '<tr>' +
                                    `<td class="left">${titleCase}:</td>`;

            if(valueTranslate.hasOwnProperty(title)) {
                result +=           '<td class="right">' + valueTranslate[title](obj[title]) + '</td>';

            } else if(obj[title] === 'denver') {
                var denverCase = toTitleCase(obj[title]);
                result +=           '<td class="right">' + denverCase + '</td>';

            } else if(Array.isArray(obj[title])) {
                var len = obj[title].length;
                for (var i=0; i<len; i++) {
                    if(i != len - 1) {
                        result +=    `<td class="rightArray1">${obj[title][i]}` + ',' + '</td>';
                    } else {
                        result +=    `<td class="rightArray2">${obj[title][i]}</td>`;
                    }
                }
            } else if(typeof obj[title] === 'object') {
                for (var subTitle in obj[title]) {
                    result +=        `<td class="rightObj">${subTitle}` + ': ' + `${obj[title][subTitle]}` + '</td>';
                }
            } else if(obj[title] === true) {
                result +=            `<td class="right">Yes</td>`;

            } else {
                result +=            `<td class="right">${obj[title]}</td>`;
            }

            result +=            '</tr>' +
                            '</table>' +
                     '</div>';
        }
    }
    result += '</div>';
    return result;
}

var resultElement = "";

resultElement += '<div class="headline">' +
                    `<p>${job.headline}<p>` +
                 '</div>';

resultElement += jobDescription(job.essentials, 'essentials');
resultElement += jobDescription(job.methodology, 'methodology');
resultElement += jobDescription(job.specs, 'specs');
resultElement += jobDescription(job.profile, 'profile');
resultElement += jobDescription(job.equipment, 'equipment');
resultElement += jobDescription(job.technologies, 'technologies');

$('.jobDescription').append(resultElement);
















