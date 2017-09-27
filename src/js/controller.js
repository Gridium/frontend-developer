import { job } from './job';
import {
    title,
    essentials,
    methodology,
    specs,
    profile,
    equipment,
    technologies
} from './components/index';

function Ctrl() {
    this.container = document.getElementById('job');
    this.displayJob();
};

Ctrl.fn = Ctrl.prototype;

Ctrl.fn.displayJob = function() {
    this.container.appendChild(title.render(job.headline));
    this.container.appendChild(essentials.render(job.essentials));
    this.container.appendChild(methodology.render(job.methodology));
    this.container.appendChild(specs.render(job.specs));

    this.container.appendChild(profile.prepareCharts());
    profile.drawCharts(job.profile);

    this.container.appendChild(equipment.render(job.equipment));
    
    this.container.appendChild(technologies.prepareCharts());
    technologies.drawCharts(job.technologies);

    this.container.appendChild(other.render());
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