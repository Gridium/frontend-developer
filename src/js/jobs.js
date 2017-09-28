import { constants } from './constants';

export const jobs = [
    {
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
            "new_features": 50,
            "client_support": 9,
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
    },
    {
        "headline": "Gridium Space-Time Traveller",
        "essentials": {
            "locations": "everywhere and nowhere, anytime",
            "position": "Space-Time Traveller",
            "employment": EmploymentType().Temporary,
            "experience": [ExperienceLevels().GrayBeard],
            "startdate": new Date("3, Jul 1985"),
            "companysize": CompanySize().MoreThanTwoHundred,
            "teamsize": { "min": 1, "max": 1 },
        },
        "methodology": {
            "propulsion_engines": true,
            "explosions": true,
            "moon_landing": true,
            "exploration": true,
            "learn_from_errors": false,
            "emergency_control": BuildServers().NotYetChosen,
            "travels": TravelOptions().Plentiful,
           
            "commit_on_day_one": true,
        },
        "specs": {
            "workload": 1.0,
            "workweek": ">9000",
            "schedule": ScheduleOptions().Flexible,
            "remote": RemoteWorking().No,
            "pto": PTO().Accrued
        },
        "profile": {
            "survival": 50,
            "time_travel": 10,
            "space_travel": 10,
            "wandering": 10,
            "flying_in_space": 20,
        },
        "equipment": {
            "operatingsystem": [OperationSystems().Ubuntu],
            "computer": MachineType().Workstation,
        },
        "technologies": {
            "Harbour": Level().Expert,
            "VHDL": Level().Expert,
            "NewLisp": Level().Expert,
            "Web Ontology Language": Level().Expert,
            "testing": {
                "nested": true,
                "Pan": Level().Expert,
                "Eagle": Level().Expert,
                "Boo": Level().Expert,
            },
            "framework": {
                "nested": true,
                "Latte": Level().Expert,
                "FORTRAN": Level().Expert,
                "ColdFusion": Level().Expert,
                "Lua": Level().Expert,
            },
            "Space Travel": Level().Expert,
        },
        "other": [
            "we love getting lost in space",
            "you can work from anywhere and anywhen you want."
        ],
        "apply": "https://gridium.com/about/working-at-gridium/"
    }
];

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