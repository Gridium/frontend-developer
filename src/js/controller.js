import { job } from './job';
import {
    title,
    intro,
    methodology,
    profile,
    technologies,
    other,
    apply
} from './components/index';

function Ctrl() {
    this.container = document.getElementById('job');
    this.displayJob(job);
};

Ctrl.fn = Ctrl.prototype;

Ctrl.fn.displayJob = function(data) {
    this.container.appendChild(title.render(data.headline));
    this.container.appendChild(intro.render(data));
    this.container.appendChild(apply.render(data.apply));
    const columnsWrapper = document.createElement('div');
    columnsWrapper.className = 'column-wrapper';
    columnsWrapper.appendChild(profile.prepareCharts());
    profile.drawCharts(data.profile);
    columnsWrapper.appendChild(methodology.render(data.methodology));
    this.container.appendChild(columnsWrapper);
    this.container.appendChild(technologies.prepareCharts(data.technologies));
    technologies.drawCharts(data.technologies);
    this.container.appendChild(other.render(data.other));
    this.container.appendChild(apply.render(data.apply));
}

window.addEventListener('DOMContentLoaded', function() {
    const ctrl = new Ctrl();
});

// Listen for window resize and resize the charts accordingly
let throttler;
window.onresize = function() {
    clearTimeout(throttler);
    throttler = setTimeout(function() {
        profile.resizeDone();
        technologies.resizeDone();
    }, 100);
};