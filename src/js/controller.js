import { jobs } from './jobs';
import {
    title,
    intro,
    methodology,
    profile,
    technologies,
    other,
    apply,
    jobsList
} from './components/index';

function Ctrl() {
    this.jobsList = document.getElementById('jobs');
    this.job = document.getElementById('job');
    this.displayJobsList(jobs.map(el => el.headline));
    this.addJobsListEvents();
};

Ctrl.fn = Ctrl.prototype;

Ctrl.fn.displayJobsList = function (data) {
    this.jobsList.appendChild(jobsList.render(data));
}

Ctrl.fn.addJobsListEvents = function() {
    const jobsList = document.querySelectorAll('[data-job]');
    jobsList.forEach(job => job.addEventListener(
        'click', this.triggerJob.bind(this)
    ));
}

Ctrl.fn.triggerJob = function(e) {
    this.clearJob();
    this.displayJob(jobs[e.target.dataset.job]);
}

Ctrl.fn.displayJob = function (data) {
    this.job.appendChild(title.render(data.headline));
    this.job.appendChild(intro.render(data));
    this.job.appendChild(apply.render(data.apply));
    const columnsWrapper = document.createElement('div');
    columnsWrapper.className = 'column-wrapper';
    columnsWrapper.appendChild(profile.prepareCharts());
    profile.drawCharts(data.profile);
    columnsWrapper.appendChild(methodology.render(data.methodology));
    this.job.appendChild(columnsWrapper);
    this.job.appendChild(technologies.prepareCharts(data.technologies));
    technologies.drawCharts(data.technologies);
    this.job.appendChild(other.render(data.other));
    this.job.appendChild(apply.render(data.apply));
}

Ctrl.fn.clearJob = function() {
    this.job.innerHTML = '';
}

window.addEventListener('DOMContentLoaded', function () {
    const ctrl = new Ctrl();
});

// Listen for window resize and resize the charts accordingly
let throttler;
window.onresize = function () {
    clearTimeout(throttler);
    throttler = setTimeout(function () {
        profile.resizeDone();
        technologies.resizeDone();
    }, 100);
};