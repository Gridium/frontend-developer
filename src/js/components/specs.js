import { createRow } from '../helpers';

export const specs = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Details';
        wrapper.appendChild(sectionTitle);

        this.addRow(createRow('Workload', data.workload));
        this.addRow(createRow('Workweek', `${data.workweek} hours`));
        this.addRow(createRow('Schedule', data.schedule));
        this.addRow(createRow('Remote', data.remote));
        this.addRow(createRow('Personal time off', data.pto));

        wrapper.appendChild(this.container);
        return wrapper;
    }
};