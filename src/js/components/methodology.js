import { constants } from '../constants';
import { createRow, keyToLabel } from '../helpers';

export const methodology = {
    container: null,
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        this.container = document.createElement('ul');
        sectionTitle.textContent = 'How we do things';
        wrapper.id = 'methodology';
        wrapper.appendChild(sectionTitle);
        Object.keys(data).forEach(key => {
            if (typeof data[key] === typeof true) {
                this.addRow(createRow(keyToLabel(key), data[key] ? '✅' : '❌'));
            } else if (data[key] !== constants.notYetChosen) {
                this.addRow(createRow(keyToLabel(key), `with ${data[key]}`));
            }
        });
        wrapper.appendChild(this.container);
        return wrapper;
    }
};