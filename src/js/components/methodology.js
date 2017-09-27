import { constants } from '../constants';
import { createRow } from '../helpers';

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

        this.addRow(createRow('Code Review', data.codereviews ? '✅' : '❌'));
        this.addRow(createRow('Prototyping', data.prototyping ? '✅' : '❌'));
        this.addRow(createRow('Unit Testing', data.unittests ? '✅' : '❌'));
        this.addRow(createRow('Integration Tests', data.integrationtests ? '✅' : '❌'));

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

        this.addRow(createRow('Standups', data.standups ? '✅' : '❌'));
        this.addRow(createRow('Quick Start', data.quickstart ? '✅' : '❌'));
        this.addRow(createRow('Commit on Day 1', data.commitondayone ? '✅' : '❌'));

        wrapper.appendChild(this.container);
        return wrapper;
    }
};