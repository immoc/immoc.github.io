// jQuery.noConflict();

// RUN

jQuery(document).ready(function(){
	if (navigator.appVersion.search(/MSIE (5|4)/gi) == -1) {
	jQuery('#parallax').jparallax({xparallax:true, yparallax:false}, {width:700}, {width:900}, {width:1400});
	}
});