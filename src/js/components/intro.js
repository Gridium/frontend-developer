import {
    essentials,
    equipment,
    specs,
} from './index';

export const intro = {
    render: function(data) {
        const wrapper = document.createElement('div');
        wrapper.appendChild(essentials.render(data.essentials));
        wrapper.appendChild(specs.render(data.specs));
        wrapper.appendChild(equipment.render(data.equipment));
        
        const text = document.createElement('p');
        text.textContent = 'Do you like what you are seeing? Read on and see if your skills match with what we are looking for!';
        wrapper.appendChild(text);
        return wrapper;
    }
}
