import { createRow } from '../helpers';

export const equipment = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Equipment';
        wrapper.appendChild(sectionTitle);

        this.addRow(createRow('Operating System', data.operatingsystem.join(' OR ')));
        this.addRow(createRow('Computer', data.computer));

        wrapper.appendChild(this.container);
        return wrapper;
    }
};