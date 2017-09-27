export const other = {
    render: function(data) {
        const wrapper = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        const sectionText = document.createElement('p');
        sectionTitle.textContent = 'Why join us?';
        const textContent = data.join(' & ');
        sectionText.textContent = textContent[0].toUpperCase() + textContent.slice(1);
        wrapper.appendChild(sectionTitle);
        wrapper.appendChild(sectionText);
        return wrapper;
    }
};