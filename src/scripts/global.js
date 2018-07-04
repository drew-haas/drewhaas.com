class Global {
	constructor() {
		this.ga = new GoogleAnalytics();
	}

	init() {
		this.ga.init();
		this.fullpage();
	}

	fullpage() {
		console.log('init fp');
	}
}

const global = new Global();
global.init();