'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleAnalytics = function () {
	function GoogleAnalytics() {
		_classCallCheck(this, GoogleAnalytics);

		this.id = 'UA-XXXXXX-X';
	}

	_createClass(GoogleAnalytics, [{
		key: 'init',
		value: function init() {
			console.info('Initing Google Analytics with ID: ' + this.id);
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', this.id);
		}
	}]);

	return GoogleAnalytics;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Global = function () {
	function Global() {
		_classCallCheck(this, Global);

		this.ga = new GoogleAnalytics();
	}

	_createClass(Global, [{
		key: 'init',
		value: function init() {
			this.ga.init();
			this.scrollTriggers();
			this.menu();
			this.parallaxText();
		}
	}, {
		key: 'scrollTriggers',
		value: function scrollTriggers() {
			var controller = new ScrollMagic.Controller();

			$('.portfolio-item').each(function () {
				var id = $(this).attr('id');
				var tl = new TimelineMax();
				tl.staggerTo($(this).find('.fade-up'), 1, { opacity: 1, y: 0, ease: Power4.easeOut }, .1);

				var scene = new ScrollMagic.Scene({
					triggerElement: '#' + id,
					triggerHook: .7
				}).setTween(tl).addTo(controller);
			});
		}
	}, {
		key: 'menu',
		value: function menu() {
			var count = 0;

			$('.menu-icon').click(function () {
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
	}, {
		key: 'parallaxText',
		value: function parallaxText() {
			var prlxDuration = $(window).height();
			var controller = new ScrollMagic.Controller();

			$('.hero-section h1').blast({
				delimiter: 'character',
				customClass: 'letter',
				generateIndexID: true
			});

			var scene1 = new ScrollMagic.Scene({
				duration: prlxDuration,
				triggerElement: 'body',
				triggerHook: 0
			}).addTo(controller).on('progress', function (e) {
				TweenMax.to($('#letter-0'), 3, { y: e.progress * 50, ease: Expo.easeOut });
			});

			var scene2 = new ScrollMagic.Scene({
				duration: prlxDuration,
				triggerElement: 'body',
				triggerHook: 0
			}).addTo(controller).on('progress', function (e) {
				TweenMax.to($('#letter-1'), 3, { y: e.progress * 300, ease: Expo.easeOut });
			});

			var scene3 = new ScrollMagic.Scene({
				duration: prlxDuration,
				triggerElement: 'body',
				triggerHook: 0
			}).addTo(controller).on('progress', function (e) {
				TweenMax.to($('#letter-2'), 3, { y: e.progress * 80, ease: Expo.easeOut });
			});

			var scene4 = new ScrollMagic.Scene({
				duration: prlxDuration,
				triggerElement: 'body',
				triggerHook: 0
			}).addTo(controller).on('progress', function (e) {
				TweenMax.to($('#letter-3'), 3, { y: e.progress * 160, ease: Expo.easeOut });
			});

			var scene5 = new ScrollMagic.Scene({
				duration: prlxDuration,
				triggerElement: 'body',
				triggerHook: 0
			}).addTo(controller).on('progress', function (e) {
				TweenMax.to($('#letter-4'), 3, { y: e.progress * 120, ease: Expo.easeOut });
			});

			var scene6 = new ScrollMagic.Scene({
				duration: prlxDuration,
				triggerElement: 'body',
				triggerHook: 0
			}).addTo(controller).on('progress', function (e) {
				TweenMax.to($('#letter-5'), 3, { y: e.progress * 100, ease: Expo.easeOut });
			});

			var scene7 = new ScrollMagic.Scene({
				duration: prlxDuration,
				triggerElement: 'body',
				triggerHook: 0
			}).addTo(controller).on('progress', function (e) {
				TweenMax.to($('#letter-6'), 3, { y: e.progress * 240, ease: Expo.easeOut });
			});

			var scene8 = new ScrollMagic.Scene({
				duration: prlxDuration,
				triggerElement: 'body',
				triggerHook: 0
			}).addTo(controller).on('progress', function (e) {
				TweenMax.to($('#letter-'), 3, { y: e.progress * 200, ease: Expo.easeOut });
			});
		}
	}]);

	return Global;
}();

var global = new Global();
global.init();
//# sourceMappingURL=bundle.js.map
