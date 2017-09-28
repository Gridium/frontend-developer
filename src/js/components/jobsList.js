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
        this.container = document.createElement('ul');
        title.textContent = 'Welcome to the Gridium developers job boards!';
        text.textContent = 'Browse all new opportunities and find the job that match your skills.';

        (data.forEach((el, i) => {
            this.container.appendChild(createRow('', `<h2><a data-job=${i} href="#">${el} ›</a></h2>`))
        }));

        wrapper.appendChild(title);
        wrapper.appendChild(text);
        wrapper.appendChild(this.container);
        return wrapper;
    }
}