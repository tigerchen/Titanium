/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	
	Ti.App.Device = {
		_osname:Ti.Platform.osname,
		_version:Ti.Platform.version,
		_height:Ti.Platform.displayCaps.platformHeight,
		_width:Ti.Platform.displayCaps.platformWidth
	};
	
	Ti.App.DeviceToken = {
		_device_token:''
	};	
	
	Ti.App.Index = {
		_index:0
	};
	
	Ti.App.User = {
		_loginStatus:'false',
		_auth_token:'',
		_survey_id:'',
		_receipt_id:''
	};
	
	if(Ti.App.Device._osname == 'android'){
		Ti.App.Key = {
		_Appkey: 'wp51dSKy4USzP5TQ'
		};
	}else{
		Ti.App.Key = {
		_Appkey: 'bTBTpVudV2AzZkLT'
		};	
	};
	
	
	// Ti.App.Location = {
		// _latitude: '-6.9243597',
		// _longitude:'107.551548'
	// };
		
	Ti.App.Location = {
		_latitude: '',
		_longitude:''
	};		
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	//var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	//var Window;
	// iPhone makes use of the platform-specific navigation controller,
	// all other platforms follow a similar UI pattern
	
	//Window = require('ui/handheld/ApplicationWindow');
		

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	var theTabGroup = new ApplicationTabGroup();
	if (Ti.App.Device._osname === 'iphone' || Ti.App.Device._osname === 'ipad') {
		theTabGroup.open(0, {transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	}else{
		theTabGroup.open(0);
	}
	
	theTabGroup.addEventListener('focus', function(e) {
		var geolocation = require('ui/common/geolocation');
  		var geo = new geolocation();
	});
	
	
})();
