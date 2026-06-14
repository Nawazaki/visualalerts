var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
/**
 * jQuery Yii plugin file.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @link http://www.yiiframework.com/
 * @copyright 2008-2010 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

;(function($) {

$.yii = {
	version : '1.0',

	submitForm : function (element, url, params) {
		var f = $(element).parents('form')[0];
		if (!f) {
			f = document.createElement('form');
			f.style.display = 'none';
			element.parentNode.appendChild(f);
			f.method = 'POST';
		}
		if (typeof url == 'string' && url != '') {
			f.action = url;
		}
		if (element.target != null) {
			f.target = element.target;
		}

		var inputs = [];
		$.each(params, function(name, value) {
			var input = document.createElement("input");
			input.setAttribute("type", "hidden");
			input.setAttribute("name", name);
			input.setAttribute("value", value);
			f.appendChild(input);
			inputs.push(input);
		});

		// remember who triggers the form submission
		// this is used by jquery.yiiactiveform.js
		$(f).data('submitObject', $(element));

		$(f).trigger('submit');

		$.each(inputs, function() {
			f.removeChild(this);
		});
	}
};

})(jQuery);

}

/*
     FILE ARCHIVED ON 23:23:42 Apr 19, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:41:36 Jun 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.671
  exclusion.robots: 0.077
  exclusion.robots.policy: 0.065
  esindex: 0.011
  cdx.remote: 13.751
  LoadShardBlock: 94.98 (3)
  PetaboxLoader3.datanode: 143.582 (4)
  PetaboxLoader3.resolve: 321.411 (2)
  load_resource: 427.023
*/