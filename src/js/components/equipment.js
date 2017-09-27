export const equipment = {
    render: function(data) {
        const wrapper = document.createElement('div');
        const text = document.createElement('p');

        text.innerHTML = `We all use ${data.computer}s with ${data.operatingsystem.join(' or ')} installed.`;

        wrapper.appendChild(text);
        return wrapper;
    }
};