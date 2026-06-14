var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
$(function() {
	$( "#hybridauth-openid-div" ).dialog({
			autoOpen: false,
			height: 200,
			width: 350,
			modal: true,
			resizable: false,
			title: 'Open ID Provider',
			buttons: {
				"Login": function() {
					$('#hybridauth-openid-form').submit();
				}
				,
				Cancel: function() {
					$(this).dialog( "close" );
				}
			}
	});

	$("li.inactive #hybridauth-openid").click(function() {
		event.preventDefault();
		$( "#hybridauth-openid-div").dialog( "open" );
	});
	
	$( "#hybridauth-confirmunlink" ).dialog({
			autoOpen: false,
			height: 200,
			width: 350,
			modal: true,
			resizable: false,
			title: 'Unlink Provider',
			buttons: {
				"Unlink": function() {
					$('#hybridauth-unlink-form').submit();
				}
				,
				Cancel: function() {
					$(this).dialog( "close" );
				}
			}
	});
	
	$('.hybridauth-providerlist li.active a').click(function(e) {
		e.preventDefault();
		$('#hybridauth-unlinkprovider').val(this.id.split('-')[1]);
		$( "#hybridauth-confirmunlink").dialog( "open" );
		
	});
	
});
}

/*
     FILE ARCHIVED ON 23:09:56 Feb 11, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:38:35 Jun 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.407
  captures_list: 0.479
  exclusion.robots: 0.05
  exclusion.robots.policy: 0.043
  esindex: 0.01
  cdx.remote: 14.669
  LoadShardBlock: 139.952 (3)
  PetaboxLoader3.datanode: 161.201 (4)
  PetaboxLoader3.resolve: 69.009 (2)
  load_resource: 91.725
*/