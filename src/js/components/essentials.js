import { CompanySizeResources } from '../job';

export const essentials = {
    render: function(data) {
        const location = data.locations[0].toUpperCase() + data.locations.slice(1);
        const experience = data.experience.map(el => `<strong>${el}</strong>`).join('/');
        const startDate = new Date(data.startdate)
        const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const teamSize = data.teamsize.max === data.teamsize.min 
            ? data.teamsize.max 
            : `${data.teamsize.min} - ${data.teamsize.max}`;

        const wrapper = document.createElement('div');
        const text = document.createElement('div');
        text.innerHTML = `<p>Our company is located in ${location} and we are looking for a ${experience} <strong>${data.position}</strong> for a ${data.employment.toLowerCase()} position. Starting date: ${startDate.toLocaleDateString('en-US', dateOptions)}</p>
        <p>Gridium has ${CompanySizeResources()[data.companysize]} employees and you will be working in a team of ${teamSize} people.</p>`;
        wrapper.appendChild(text);

        return wrapper;
    }
}
