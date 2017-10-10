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

Vue.component('v-testing', {
	props: ['test', 'testValue'],
	template: `<br>
						<small>{{test}}: {{testValue}}</small>`
});

let newApp = new Vue({
	el: '#app',
	data: job,
	methods: {
		loopInnerObj: innerObj => {
			Object.keys(innerObj);
		}
	}
});

