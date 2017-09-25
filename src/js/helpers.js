export const createRow = (label, text) => {
    const rowNode = document.createElement('li');
    const labelNode = document.createElement('span');
    const textNode = document.createElement('span');
    labelNode.textContent = `${label}: `;
    labelNode.className = 'label';
    textNode.textContent = text;
    rowNode.appendChild(labelNode);
    rowNode.appendChild(textNode);
    return rowNode;
};