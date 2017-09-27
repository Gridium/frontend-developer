import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  job = {
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

  options = {
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

  constructor() {
  }

  EmploymentType() { return this.enumerate('Permanent', 'Temporary', 'Project'); }
  ExperienceLevels() { return this.enumerate('Junior', 'Seasoned', 'Lead', 'GrayBeard'); }
  CompanySize() { return this.enumerate('LessThanTen', 'TenToTwenty', 'TwentyToFifty', 'FiftyToTwoHundred', 'MoreThanTwoHundred'); }
  VersionControlSystem() { return this.enumerate('NotYetChosen', 'Git', 'BitBucket'); }
  IssueTrackers() { return this.enumerate('NotYetChosen', 'GitHub', 'Jira', 'Tikkit'); }
  BuildServers() { return this.enumerate('NotYetChosen', 'Jenkins', 'Travis', 'Codeship', 'CircleCI'); }
  CodeAnalysisTools() { return this.enumerate('NotYetChosen', 'ESLint'); }
  KnowledgeRepos() { return this.enumerate('NotYetChosen', 'GitHubWiki', 'Confluence'); }
  TravelOptions() { return this.enumerate('None', 'Possible', 'Plentiful'); }
  ScheduleOptions() { return this.enumerate('Fixed', 'Flexible'); }
  RemoteWorking() { return this.enumerate('No', 'Negotiable', 'Required'); }
  RelocationPackages() { return this.enumerate('Nonealse', 'Negotiable'); }
  OperationSystems() { return this.enumerate('MacOSX', 'CentOS', 'Ubuntu', 'Windows'); }
  MachineType() { return this.enumerate('Workstation', 'Laptop'); }
  Monitors() { return this.enumerate('Negotiable'); }
  Level() { return this.enumerate('Familiar', 'Good', 'Expert'); }
  TrainingType() { return this.enumerate('None', 'Informal', 'Formal', 'External'); }
  PTO() { return this.enumerate('Accrued', 'Unlimited'); }

  // https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
  enumerate(...args: any[]): any {
    const v = args;
    const s = {all: [], keys: v};
    for (let i = v.length; i--; ) {
      s[v[i]] = s.all[i] = v[i];
    }
    return s;
  }

  getJob() {
    return this.job;
  }
  getOptions() {
    return this.options;
  }
}
