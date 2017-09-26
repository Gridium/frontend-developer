import { job } from './job';
import {
    title,
    essentials,
    methodology
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
}

window.addEventListener('DOMContentLoaded', function() {
    const ctrl = new Ctrl();
});