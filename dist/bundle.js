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
		}
	}, {
		key: 'scrollTriggers',
		value: function scrollTriggers() {
			var controller = new ScrollMagic.Controller({ addIndicators: true });

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
	}]);

	return Global;
}();

var global = new Global();
global.init();
//# sourceMappingURL=bundle.js.map
