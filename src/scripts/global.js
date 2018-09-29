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
		var controller = new ScrollMagic.Controller();

		$('.portfolio-item').each(function() {
			var id = $(this).attr('id');
			var tl = new TimelineMax();
			tl.staggerTo($(this).find('.fade-up'), 1, {opacity: 1, y: 0, ease: Power4.easeOut}, .1);

			var scene = new ScrollMagic.Scene({
				triggerElement: '#' + id,
				triggerHook: .7
			})
			.setTween(tl)
			.addTo(controller);
		});
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