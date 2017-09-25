import { CompanySizeResources } from '../job';
import { createRow } from '../helpers';

export const essentials = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const startDate = new Date(data.startdate)
        const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const teamSize = data.teamsize.max === data.teamsize.min 
            ? data.teamsize.max 
            : `${data.teamsize.min} - ${data.teamsize.max}`;

        this.addRow(createRow('Location', data.locations[0].toUpperCase() + data.locations.slice(1)));
        this.addRow(createRow('Contract', data.employment));
        this.addRow(createRow('Experience', data.experience.join(' OR ')));
        this.addRow(createRow('Starting date', startDate.toLocaleDateString('en-US', dateOptions)));
        this.addRow(createRow('Team Size', teamSize));
        this.addRow(createRow('Company Size', CompanySizeResources()[data.companysize]));

        return this.container;
    }
}
