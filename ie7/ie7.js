/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'murf-icon-font\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mfi-render-play': '&#xe900;',
		'mfi-play': '&#xe901;',
		'mfi-pronunciation': '&#xe902;',
		'mfi-ai-changer': '&#xe903;',
		'mfi-training': '&#xe904;',
		'mfi-notification': '&#xe905;',
		'mfi-folder-locked-closed': '&#xe906;',
		'mfi-folder-add': '&#xe907;',
		'mfi-folder-locked-opened': '&#xe908;',
		'mfi-folder-opened': '&#xe909;',
		'mfi-folder-closed': '&#xe90a;',
		'mfi-upgrade-2': '&#xe90b;',
		'mfi-unlinked': '&#xe90c;',
		'mfi-resize-horizontal': '&#xe90d;',
		'mfi-emphasis': '&#xe90e;',
		'mfi-slow': '&#xe90f;',
		'mfi-fast': '&#xe910;',
		'mfi-low-pitch': '&#xe911;',
		'mfi-high-pitch': '&#xe912;',
		'mfi-low-pitch-2': '&#xe913;',
		'mfi-high-pitch-2': '&#xe914;',
		'mfi-icon-backup-reset': '&#xe915;',
		'mfi-icon-reset': '&#xe916;',
		'mfi-music-voice': '&#xe917;',
		'mfi-no-music': '&#xe918;',
		'mfi-trim': '&#xe919;',
		'mfi-select-frames': '&#xe91a;',
		'mfi-workspace': '&#xe91b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/mfi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
