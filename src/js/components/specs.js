import { createRow } from '../helpers';

export const specs = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const text = document.createElement('p');
        const remote = data.remote === 'No' ? 'not possible' : data.remote.toLowerCase();
        
        text.innerHTML = `We are looking for people available to work ${data.workweek} hours per week, with a ${data.schedule.toLowerCase()} schedule. Remote working is ${remote} and personal time off is ${data.pto.toLowerCase()}.`;
        wrapper.appendChild(text);

        return wrapper;
    }
};