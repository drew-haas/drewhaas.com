class Global {
	constructor() {
		this.ga = new GoogleAnalytics();
	}

	init() {
		this.ga.init();
		//this.scrollTriggers();
		this.menu();
	}

	scrollTriggers() {
		/* console.log('scroll triggers');

		var controller = new ScrollMagic.Controller({addIndicators: true});
		var tlServices = new TimelineMax();
		var tween2 = tlServices.staggerFrom($('.fade-up-2'), 1, {y: 40, opacity: 0, ease: Expo.easeOut}, 0.2);
		
		var scene = new ScrollMagic.Scene({
			triggerElement: '#laughingcow'
		})
		.setClassToggle('#laughingcow', 'active')
		.addTo(controller); */
	}

	menu() {
		var count = 0;

		$('.menu-icon').click(function() {
			if (count % 2) {
				// close
				$('.menu').removeClass('open');
			} else {
				// open
				$('.menu').addClass('open');
			}

			count += 1;
		});
	}
}

const global = new Global();
global.init();