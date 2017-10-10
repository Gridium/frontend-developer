Vue.component('jumbotron', {
	props: ['headline', 'other'],
	template: `<div class="jumbotron jumbotron-fluid">
							<video autoplay loop id="jumbo-video" muted plays-inline>
								<source src="/assets/563397345.mp4" type="video/mp4">
							</video>
							<div class="container">
								<h1>{{ headline }}
								<br>
								<small>{{other[0]}}</small>
								<br>
								<small>{{other[1]}}</small></h1>
							</div>
						</div>`
});

function capitalizeMe (str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

let newApp = new Vue({
	el: '#app',
	data: job,
});

let essentials = new Vue({
	el: '#essentials',
	data: job.essentials,
	methods: {
		capitalizeMe: function(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
		giveMeSpace: function(str, splt) {
			console.log(str.split(splt));
			return str.split(splt).map(function(i) {
				if(i == "") return;
				i = splt + i;
				return i;
			}).join(' ');
		}
	}
});

let methodology = new Vue({
	el: '#methodology',
	data: job.methodology,
	methods: {
		capitalizeMe: function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	}
});

let specs = new Vue({
	el: '#specs',
	data: job.specs,
});

let profile = new Vue({
	el: '#profile',
	data: job.profile,
});

let equipment = new Vue({
	el: '#equipment',
	data: job.equipment,
});

let technologies = new Vue({
	el: '#technologies',
	data: job.technologies,
	methods: {
		capitalizeMe: function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	}
});
