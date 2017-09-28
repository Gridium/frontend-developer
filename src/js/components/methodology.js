import { constants } from '../constants';
import { createRow } from '../helpers';

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

        this.addRow(createRow('Code Review', data.codereviews ? '✅' : '❌'));
        this.addRow(createRow('Prototyping', data.prototyping ? '✅' : '❌'));
        this.addRow(createRow('Unit Testing', data.unittests ? '✅' : '❌'));
        this.addRow(createRow('Integration Tests', data.integrationtests ? '✅' : '❌'));

        if (data.buildserver !== constants.notYetChosen) {
            this.addRow(createRow('Server Builds', `with ${data.buildserver}`));
        }
        if (data.staticcodeanalysis !== constants.notYetChosen) {
            this.addRow(createRow('Code Analysis Tool', `with ${data.staticcodeanalysis}`));
        }
        if (data.versioncontrol !== constants.notYetChosen) {
            this.addRow(createRow('Version Control', `with ${data.versioncontrol}`));
        }
        if (data.issuetracker !== constants.notYetChosen) {
            this.addRow(createRow('Issue Tracker', `with ${data.issuetracker}`));
        }

        this.addRow(createRow('Standups', data.standups ? '✅' : '❌'));
        this.addRow(createRow('Quick Start', data.quickstart ? '✅' : '❌'));
        this.addRow(createRow('Commit on Day 1', data.commitondayone ? '✅' : '❌'));

        wrapper.appendChild(this.container);
        return wrapper;
    }
};