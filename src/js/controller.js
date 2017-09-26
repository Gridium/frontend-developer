import { job } from './job';
import {
    title,
    essentials,
    methodology,
    specs,
    profile
} from './components/index';

function Ctrl() {
    this.container = document.getElementById('job');
    this.displayJob();
}

Ctrl.fn = Ctrl.prototype;

Ctrl.fn.displayJob = function() {
    this.container.appendChild(title.render(job.headline))
    this.container.appendChild(essentials.render(job.essentials))
    this.container.appendChild(methodology.render(job.methodology))
    this.container.appendChild(specs.render(job.specs))
    this.container.appendChild(profile.render())
    profile.drawChart(job.profile);
}

window.addEventListener('DOMContentLoaded', function() {
    const ctrl = new Ctrl();
});