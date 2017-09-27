export const createRow = (label, content) => {
    const rowNode = document.createElement('li');
    const labelNode = document.createElement('span');
    const contentNode = document.createElement('span');
    labelNode.textContent = `${label} `;
    labelNode.className = 'label';
    contentNode.innerHTML = content;
    rowNode.appendChild(labelNode);
    rowNode.appendChild(contentNode);
    return rowNode;
};