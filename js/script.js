(function ($) {
	'use strict';

	$(window).on('load', function () {
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});

	$('.play-icon i').click(function () {
		var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
		$(this).replaceWith(video);
	});

	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
				filterizd = $('.filtr-container').filterizr({});
		}
		$('.portfolio-filter button').on('click', function () {
				$('.portfolio-filter button').removeClass('active');
				$(this).addClass('active');
		});
});

	$('.testimonial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.clients-logo-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('#contact-form').validate({
		rules: {
			name: {
				required: true,
				minlength: 4
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: false
			},
			message: {
				required: true
			}
		},
		messages: {
			user_name: {
				required: 'Come on, you have a name don\'t you? ',
				minlength: 'Your name must consist of at least 2 characters'
			},
			email: {
				required: 'Please put your email address'
			},
			message: {
				required: 'Put some messages here?',
				minlength: 'Your name must consist of at least 2 characters'
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: 'POST',
				data: $(form).serialize(),
				url: 'sendmail.php',
				success: function () {
					$('#contact-form #success').fadeIn();
				},
				error: function () {
					$('#contact-form #error').fadeIn();
				}
			});
		}
	});


	function initialize() {
		var map;

		var nottingham = new google.maps.LatLng(51.507351, -0.127758);

		var style = [{
			'stylers': [{
				'hue': '#ff61a6'
			}, {
				'visibility': 'on'
			}, {
				'invert_lightness': true
			}, {
				'saturation': 40
			}, {
				'lightness': 10
			}]
		}];

		var mapOptions = {
			center: nottingham,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoom: 17,
			backgroundColor: '#000',
			panControl: false,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE
			}

		};
		map = new google.maps.Map(document.getElementById('map'), mapOptions);

		var mapType = new google.maps.StyledMapType(style, {
			name: 'Grayscale'
		});
		map.mapTypes.set('grey', mapType);
		map.setMapTypeId('grey');

		var marker_image = 'images/marker.png';
		var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(25, 33));

		var marker = new google.maps.Marker({
			position: nottingham,
			map: map,
			icon: pinIcon,
			title: 'navigator'
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);