import Developer from 'assets/Developer';

export default class generateDeveloper{
	   constructor() {
	   		let date = new Date(Developer.job.essentials.startdate + 12096e5); //Two weeks

	   		this.applicant = {
	   			"name": Developer.Names().all[Math.floor(Math.random() * 3)],
	   			"technologies": {
			        "css3": Developer.Level().all[Math.floor(Math.random() * 3)],
			        "html5": Developer.Level().all[Math.floor(Math.random() * 3)],
			        "javascript": Developer.Level().all[Math.floor(Math.random() * 3)],
			        "node": Developer.Level().all[Math.floor(Math.random() * 3)],
			        "rest": Developer.Level().all[Math.floor(Math.random() * 3)],
			        "uiux": Developer.Level().all[Math.floor(Math.random() * 3)],
			        "design": Developer.Level().all[Math.floor(Math.random() * 3)]
	   			},
	   			"testing": {
	   				[Developer.TestingFramework().all[Math.floor(Math.random() * 3)]] : Developer.Level().all[Math.floor(Math.random() * 3)]
	   			},
	   			"framework":{
	   				[Developer.Framework().all[Math.floor(Math.random() * 3)]] : Developer.Level().all[Math.floor(Math.random() * 3)]
	   			},
	   			"boardgames": Developer.Level().all[Math.floor(Math.random() * 3)],
	   			"equipment":{
	   				"operatingsystem" : Developer.OperationSystems().all[Math.floor(Math.random() * 4)],
	   				"computer": Developer.MachineType().all[Math.floor(Math.random() * 2)]
	   			}
	   		};

	   		this.position = {
	   			"headline" : Developer.job.headline,
	   			"essentials" : {
	   				"location" : Developer.job.essentials.locations,
	   				"experience" : Developer.ExperienceLevels().all[Math.floor(Math.random() * 4)],
	   				"startdate" : [(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()],
	   				"teamsize" : Math.floor(Math.random() * 4)+1
	   			},
	   			"methodology" : {
	   				"codereviews" : Developer.job.methodology.codereviews,
	   				"prototyping" : Developer.job.methodology.prototyping,
	   				"failfast" : Developer.job.methodology.failfast,
	   				"unittests" : Developer.job.methodology.unittests,
	   				"integrationtests" : Developer.job.methodology.integrationtests,
	   				"buildserver" : Developer.BuildServers().all[Math.floor(Math.random() * 5)],
	   				"staticcodeanalysis" : Developer.CodeAnalysisTools().all[Math.floor(Math.random() * 2)],
	   				"versioncontrol" : Developer.VersionControlSystem().all[Math.floor(Math.random() * 3)],
	   				"issuetracker" : Developer.IssueTrackers().all[Math.floor(Math.random() * 4)],
	   				"standups" : true,
	   				"quickstart" : true,
	   				"commitondayone" : true
	   			},
	   			"specs" : {
	   				"workload" : Developer.job.specs.workload,
	   				"workweek" : Developer.job.specs.workweek,
	   				"schedule" : Developer.ScheduleOptions().all[Math.floor(Math.random() * 2)],
	   				"remote" : Developer.RemoteWorking().all[Math.floor(Math.random() * 3)],
	   				"pto" : Developer.PTO().all[Math.floor(Math.random() * 2)]
	   			}

	   		}

   }
}