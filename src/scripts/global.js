class Global {
	constructor() {
		this.ga = new GoogleAnalytics();
	}

	init() {
		this.ga.init();
		this.scrollTriggers();
		this.menu();
	}

	scrollTriggers() {
		//console.log('scroll triggers');

		var controller = new ScrollMagic.Controller({addIndicators: true});
		// var tlServices = new TimelineMax();
		//var tween2 = tlServices.staggerFrom($('.fade-up-2'), 1, {y: 40, opacity: 0, ease: Expo.easeOut}, 0.2);
		
		// TODO figure out the trigger hook issue
		/* $('.portfolio-item').each(function() {
			console.log($(this));
			var scene = new ScrollMagic.Scene({
				triggerElement: $(this)
			})
			.setClassToggle($(this).attr('id'), 'active')
			.addTo(controller);
		}); */

		/* var scene2 = new ScrollMagic.Scene({
			triggerElement: '#laughingcow',
			triggerHook: .1
		})
		.setClassToggle('#laughingcow', 'active')
		.addTo(controller); */

		/* var scene3 = new ScrollMagic.Scene({
			triggerElement: '#designcentral',
			triggerHook: .1
		})
		.setClassToggle('#designcentral', 'active')
		.addTo(controller);

		var scene4 = new ScrollMagic.Scene({
			triggerElement: '#tribute',
			triggerHook: .1
		})
		.setClassToggle('#tribute', 'active')
		.addTo(controller);

		var scene5 = new ScrollMagic.Scene({
			triggerElement: '#ideafoundry',
			triggerHook: .1
		})
		.setClassToggle('#ideafoundry', 'active')
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