import { constants } from './constants';

export const job = {
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

function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); };
function ExperienceLevels() { return enumerate("Junior", "Seasoned", "Lead", "GrayBeard"); };
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); };
export const CompanySizeResources = () => mapEnumToResources(
    CompanySize(),
    ["Less than 10", "10 to 20", "20 to 50", "50 to 200", "200+"]
);
function VersionControlSystem() { return enumerate(constants.notYetChosen, "Git", "BitBucket"); };
function IssueTrackers() { return enumerate(constants.notYetChosen, "GitHub", "Jira", "Tikkit"); };
function BuildServers() { return enumerate(constants.notYetChosen, "Jenkins", "Travis", "Codeship", "CircleCI"); };
function CodeAnalysisTools() { return enumerate(constants.notYetChosen, "ESLint"); };
function KnowledgeRepos() { return enumerate(constants.notYetChosen, "GitHubWiki", "Confluence"); };
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); };
function ScheduleOptions() { return enumerate("Fixed", "Flexible"); };
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); };
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); };
function OperationSystems() { return enumerate("MacOSX", "CentOS", "Ubuntu", "Windows"); };
function MachineType() { return enumerate("Workstation", "Laptop"); };
function Monitors() { return enumerate("Negotiable"); };
function Level() { return enumerate("Familiar", "Good", "Expert"); };
export const LevelResources = () => mapEnumToResources(
    Level(),
    [1, 2, 3]
);
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