import { constants } from '../constants';
import { createRow, createCheckbox } from '../helpers';

export const methodology = {
    container: document.createElement('ul'),
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Methodology';
        wrapper.appendChild(sectionTitle);

        this.addRow(createRow('Code Review', createCheckbox(data.codereviews, true).outerHTML));
        this.addRow(createRow('Prototyping', createCheckbox(data.prototyping, true).outerHTML));
        this.addRow(createRow('Unit Testing', createCheckbox(data.unittests, true).outerHTML));
        this.addRow(createRow('Integration Tests', createCheckbox(data.integrationtests, true).outerHTML));

        if (data.buildserver !== constants.notYetChosen) {
            this.addRow(createRow('Server', data.buildserver));
        }
        if (data.staticcodeanalysis !== constants.notYetChosen) {
            this.addRow(createRow('Code Analysis Tool', data.staticcodeanalysis));
        }
        if (data.versioncontrol !== constants.notYetChosen) {
            this.addRow(createRow('Version Control', data.versioncontrol));
        }
        if (data.issuetracker !== constants.notYetChosen) {
            this.addRow(createRow('Issue Tracker', data.issuetracker));
        }

        this.addRow(createRow('Standups', createCheckbox(data.standups, true).outerHTML));
        this.addRow(createRow('Quick Start', createCheckbox(data.quickstart, true).outerHTML));
        this.addRow(createRow('Commit on Day 1', createCheckbox(data.commitondayone, true).outerHTML));

        wrapper.appendChild(this.container);
        return wrapper;
    }
};