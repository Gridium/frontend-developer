import { createRow } from '../helpers';

export const jobsList = {
    container: null,
    addRow: function(row) {
        this.container.appendChild(row);
    },
    render: function(data) {
        const wrapper = document.createElement('div');
        const title = document.createElement('h1');
        const text = document.createElement('p');
        const subText = document.createElement('p');
        this.container = document.createElement('ul');
        title.textContent = 'Welcome to the Gridium developers job board!';
        text.textContent = 'Browse all new opportunities and find the job that match your skills.';
        subText.textContent = `We have ${data.length} new openings!`;
        subText.style.fontWeight = 'bold';

        (data.forEach((el, i) => {
            this.container.appendChild(createRow('', `<h2><a data-job=${i} href="#">${el} ›</a></h2>`))
        }));

        wrapper.appendChild(title);
        wrapper.appendChild(text);
        wrapper.appendChild(subText);
        wrapper.appendChild(this.container);
        return wrapper;
    }
}