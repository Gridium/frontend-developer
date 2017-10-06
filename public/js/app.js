// const app = document.getElementById('app');

// const dataDump = (data) => {

// 	let cards = Object.keys(data);

// 	cards.forEach(key => {
// 		let card = document.createElement('div', key);
// 		card.className = "card";

// 		let cardBody = document.createElement('div');
// 		cardBody.className = "card-body";

// 		cardBody.innerHTML = `<h4>${key}</h4>`;

// 		if (typeof data[key] === 'object') {
// 			let innerObject = data[key];
// 			cardBody.innerHTML += `<ul>`;

// 			Object.keys(innerObject).forEach(potato => {
// 				cardBody.innerHTML += `<li id="${potato}">
// 				<label>${potato}</label>
// 				<input type="text" value="${innerObject[potato]}>${innerObject[potato]}</input>
// 				</li>`;
// 			});
// 			cardBody.innerHTML += `</ul>`;
// 		}

// 		if (typeof data[key] !== 'object') {
// 			cardBody.innerHTML += `${data[key]}`;
// 		}

// 		card.appendChild(cardBody);

// 		app.appendChild(card);

// 	});

// };
// dataDump(job);
// function newFunction(data, key) {
//     dataDump(data[key]);
// }
Vue.component('jumbotron', {
	props: ['headline'],
	template: `<div class="jumbotron jumbotron-fluid">
							<video autoplay loop id="jumbo-video" muted plays-inline>
								<source src="/assets/563397345.mp4" type="video/mp4">
							</video>
							<div class="container">
								<h1>{{ headline }}</h1>
							</div>
						</div>`
});

// Vue.component('essential', {
// 	props: ['essential'],
// 	template: `<h3>{{id}} <small>{{}}</small></h3>`
// });

let newApp = new Vue({
	el: '#app',
	data: job,
	methods: {
		loopInnerObj: innerObj => {
			Object.keys(innerObj);
		}
	}
});

