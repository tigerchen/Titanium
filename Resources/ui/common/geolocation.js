function geolocation() {
	
	Ti.Geolocation.preferredProvider = "gps";
	
	if(Ti.Platform.osname != 'android'){
		
		Ti.include("ui/common/version.js");
			
		// Ti.Geolocation.purpose = "To obtain user location for tracking distance travelled.";
		if (isIPhone3_2_Plus())
		{
			//NOTE: starting in 3.2+, you'll need to set the applications
			//purpose property for using Location services on iPhone
			Ti.Geolocation.purpose = "GPS Aroma";
		}
		
	}else{
		gpsProvider = Ti.Geolocation.Android.createLocationProvider({
		    name: Ti.Geolocation.PROVIDER_GPS,
		    minUpdateTime: 60, 
		    minUpdateDistance: 100
		});
		Ti.Geolocation.Android.addLocationProvider(gpsProvider);
		
		var gpsRule = Ti.Geolocation.Android.createLocationRule({
		    provider: Ti.Geolocation.PROVIDER_GPS,
		    // Updates should be accurate to 100m
		    accuracy: 100,
		    // Updates should be no older than 5m
		    maxAge: 300000,
		    // But  no more frequent than once per 10 seconds
		    minAge: 10000
		});
		Ti.Geolocation.Android.addLocationRule(gpsRule);
	}
	
	function translateErrorCode(code) {
		if (code == null) {
			return null;
		}
		switch (code) {
			case Ti.Geolocation.ERROR_LOCATION_UNKNOWN:
				return "Location unknown";
			case Ti.Geolocation.ERROR_DENIED:
				return "Access denied";
			case Ti.Geolocation.ERROR_NETWORK:
				return "Network error";
			case Ti.Geolocation.ERROR_HEADING_FAILURE:
				return "Failure to detect heading";
			case Ti.Geolocation.ERROR_REGION_MONITORING_DENIED:
				return "Region monitoring access denied";
			case Ti.Geolocation.ERROR_REGION_MONITORING_FAILURE:
				return "Region monitoring access failure";
			case Ti.Geolocation.ERROR_REGION_MONITORING_DELAYED:
				return "Region monitoring setup delayed";
		}
	}
		
	
	// state vars used by resume/pause
	var headingAdded = false;
	var locationAdded = false;
	
	//
	//  SHOW CUSTOM ALERT IF DEVICE HAS GEO TURNED OFF
	//
	if (Titanium.Geolocation.locationServicesEnabled === false)
	{
		Titanium.UI.createAlertDialog({title:'Aroma', message:'Your device has geo turned off - turn it on.'}).show();
	}
	else
	{
			
			if(Ti.Platform.osname != 'android'){
				
				var authorization = Titanium.Geolocation.locationServicesAuthorization;
				// Ti.API.info('Authorization: '+authorization);
				if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
					Ti.UI.createAlertDialog({
						title:'Aroma',
						message:'You have denied Titanium from running geolocation services.'
					}).show();
				}
				else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
					Ti.UI.createAlertDialog({
						title:'Aroma',
						message:'Your system has restricted Titanium from running geolocation services.'
					}).show();
				}
				
			}
	
				
		//
		// IF WE HAVE COMPASS GET THE HEADING
		//
		// if (Titanium.Geolocation.hasCompass)
		// {
				
			//
			//  TURN OFF ANNOYING COMPASS INTERFERENCE MESSAGE
			//
			Titanium.Geolocation.showCalibration = false;
	
			//
			// SET THE HEADING FILTER (THIS IS IN DEGREES OF ANGLE CHANGE)
			// EVENT WON'T FIRE UNLESS ANGLE CHANGE EXCEEDS THIS VALUE
			Titanium.Geolocation.headingFilter = 90;

	
		//
		//  SET ACCURACY - THE FOLLOWING VALUES ARE SUPPORTED
		//
		// Titanium.Geolocation.ACCURACY_BEST
		// Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS
		// Titanium.Geolocation.ACCURACY_HUNDRED_METERS
		// Titanium.Geolocation.ACCURACY_KILOMETER
		// Titanium.Geolocation.ACCURACY_THREE_KILOMETERS
		//
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	
		//
		//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
		//  THIS VALUE IS IN METERS
		//
		Titanium.Geolocation.distanceFilter = 10;
	
		//
		// GET CURRENT POSITION - THIS FIRES ONCE
		//
			Titanium.Geolocation.getCurrentPosition(function(e)
			{
				if (!e.success || e.error)
				{
					// currentLocation.text = 'error: ' + JSON.stringify(e.error);
					// Ti.API.info("Code translation: "+translateErrorCode(e.code));
					alert('error ' + JSON.stringify(e.error));
					return;
				}
		
				var longitude = e.coords.longitude;
				var latitude = e.coords.latitude;
				var altitude = e.coords.altitude;
				var heading = e.coords.heading;
				var accuracy = e.coords.accuracy;
				var speed = e.coords.speed;
				var timestamp = e.coords.timestamp;
				var altitudeAccuracy = e.coords.altitudeAccuracy;
				// Ti.API.info('speed ' + speed);
				
//				currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;
				
				Ti.App.Location = {
						_latitude: latitude,
						_longitude:longitude
				};
				
				// alert('longitude = ' + Ti.App.Location._longitude);
				// alert('latitude = ' + Ti.App.Location._latitude);
				
				// Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
			});
			
		//
		// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
		//
		var locationCallback = function(e)
		{
				var longitude = e.coords.longitude;
				var latitude = e.coords.latitude;
				var altitude = e.coords.altitude;
				var heading = e.coords.heading;
				var accuracy = e.coords.accuracy;
				var speed = e.coords.speed;
				var timestamp = e.coords.timestamp;
				var altitudeAccuracy = e.coords.altitudeAccuracy;
				// Ti.API.info('speed ' + speed);
				
				Ti.App.Location = {
						_latitude: latitude,
						_longitude:longitude
				};
		
		};
	  // };
	};
};

module.exports = geolocation;
