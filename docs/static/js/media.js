
var lang = 'ja';
var stretching = 'responsive';

document.addEventListener('DOMContentLoaded', function () {

	mejs.i18n.language(lang);

	var mediaElements = document.querySelectorAll('video, audio'), i, total = mediaElements.length;

	for (i = 0; i < total; i++) {
		new MediaElementPlayer(mediaElements[i], {
			stretching: stretching,
			pluginPath: '../mejs/',
			success: function (media) {
				var renderer = document.getElementById(media.id + '-rendername');

				media.addEventListener('loadedmetadata', function () {
					var src = media.originalNode.getAttribute('src').replace('&amp;', '&');
					if (src !== null && src !== undefined) {
						renderer.querySelector('.src').innerHTML = '<a href="' + src + '" target="_blank">' + src + '</a>';
						renderer.querySelector('.renderer').innerHTML = media.rendererName;
						renderer.querySelector('.error').innerHTML = '';
					}
				});

				media.addEventListener('error', function (e) {
					renderer.querySelector('.error').innerHTML = '<strong>Error</strong>: ' + e.message;
				});
			}
		});
	}
});
