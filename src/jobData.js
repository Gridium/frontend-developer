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
}

export function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
export function ExperienceLevels() { return enumerate("Junior", "Seasoned", "Lead", "GrayBeard"); }
export function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
export function VersionControlSystem() { return enumerate("NotYetChosen", "Git", "BitBucket"); }
export function IssueTrackers() { return enumerate("NotYetChosen", "GitHub", "Jira", "Tikkit"); }
export function BuildServers() { return enumerate("NotYetChosen", "Jenkins", "Travis", "Codeship", "CircleCI"); }
export function CodeAnalysisTools() { return enumerate("NotYetChosen", "ESLint"); }
export function KnowledgeRepos() { return enumerate("NotYetChosen", "GitHubWiki", "Confluence"); }
export function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); }
export function ScheduleOptions() { return enumerate("Fixed", "Flexible"); }
export function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); }
export function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); }
export function OperationSystems() { return enumerate("MacOSX", "CentOS", "Ubuntu", "Windows"); }
export function MachineType() { return enumerate("Workstation", "Laptop"); }
export function Monitors() { return enumerate("Negotiable"); }
export function Level() { return enumerate("Familiar", "Good", "Expert"); }
export function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); }
export function PTO() { return enumerate("Accrued", "Unlimited") }

// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
export function enumerate() { let v=arguments;let s={all:[],keys:v};for(let i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };
