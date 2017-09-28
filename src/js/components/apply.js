export const apply = {
    render: function(data) {
        const button = document.createElement('a');
        button.classList = 'btn btn-cta';
        button.textContent = 'Apply';
        button.href = data;
        button.target = '_blank';
        return button;
    }
}