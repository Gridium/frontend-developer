export const title = {
    render: function(data) {
        const titleNode = document.createElement('h1');
        titleNode.textContent = data;
        return titleNode;
    }
}