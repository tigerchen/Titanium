function geolocation() {
	
	Ti.Geolocation.preferredProvider = "gps";
	
	if (isIPhone3_2_Plus())
	{
		//NOTE: starting in 3.2+, you'll need to set the applications
		//purpose property for using Location services on iPhone
		Ti.Geolocation.purpose = "GPS demo";
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
		
			var authorization = Titanium.Geolocation.locationServicesAuthorization;
			Ti.API.info('Authorization: '+authorization);
			if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
				Ti.UI.createAlertDialog({
					title:'Kitchen Sink',
					message:'You have disallowed Titanium from running geolocation services.'
				}).show();
			}
			else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
				Ti.UI.createAlertDialog({
					title:'Kitchen Sink',
					message:'Your system has disallowed Titanium from running geolocation services.'
				}).show();
			}
		
	
		//
		// IF WE HAVE COMPASS GET THE HEADING
		//
		if (Titanium.Geolocation.hasCompass)
		{
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
					currentLocation.text = 'error: ' + JSON.stringify(e.error);
					Ti.API.info("Code translation: "+translateErrorCode(e.code));
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
				Ti.API.info('speed ' + speed);
				currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;
		
				Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
			});
			
	
		//
		// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
		//
		var locationCallback = function(e)
		{

			if (!e.success || e.error)
			{
				updatedLocation.text = 'error:' + JSON.stringify(e.error);
				updatedLatitude.text = '';
				updatedLocationAccuracy.text = '';
				updatedLocationTime.text = '';
				Ti.API.info("Code translation: "+translateErrorCode(e.code));
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
	
			//Titanium.Geolocation.distanceFilter = 100; //changed after first location event
	
			updatedLocation.text = 'long:' + longitude;
			updatedLatitude.text = 'lat: '+ latitude;
			updatedLocationAccuracy.text = 'accuracy:' + accuracy;
			updatedLocationTime.text = 'timestamp:' +new Date(timestamp);
	
			updatedLatitude.color = 'red';
			updatedLocation.color = 'red';
			updatedLocationAccuracy.color = 'red';
			updatedLocationTime.color = 'red';
			setTimeout(function()
			{
				updatedLatitude.color = '#444';
				updatedLocation.color = '#444';
				updatedLocationAccuracy.color = '#444';
				updatedLocationTime.color = '#444';
	
			},100);
	
			// reverse geo
			Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
			{
				if (evt.success) {
					var places = evt.places;
					if (places && places.length) {
						reverseGeo.text = places[0].address;
					} else {
						reverseGeo.text = "No address found";
					}
					Ti.API.debug("reverse geolocation result = "+JSON.stringify(evt));
				}
				else {
					Ti.UI.createAlertDialog({
						title:'Reverse geo error',
						message:evt.error
					}).show();
					Ti.API.info("Code translation: "+translateErrorCode(e.code));
				}
			});	
	
			Titanium.API.info('geo - location updated: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
		};
		Titanium.Geolocation.addEventListener('location', locationCallback);
		locationAdded = true;
		
	}

	win.addEventListener('focus', function()
	{
		win.focusedflag = 1;
		Ti.API.info("focus event received");
		if (!headingAdded && headingCallback) {
			Ti.API.info("adding heading callback on resume");
			Titanium.Geolocation.addEventListener('heading', headingCallback);
			headingAdded = true;
		}
		if (!locationAdded && locationCallback) {
			Ti.API.info("adding location callback on resume");
			Titanium.Geolocation.addEventListener('location', locationCallback);
			locationAdded = true;
		}


		var addr = "2065 Hamilton Avenue San Jose California 95125";
		
		Titanium.Geolocation.forwardGeocoder(addr,function(evt)
		{
			Ti.API.info('in forward ');
			forwardGeo.text = "lat:"+evt.latitude+", long:"+evt.longitude;
			Titanium.Geolocation.reverseGeocoder(evt.latitude,evt.longitude,function(evt)
			{
				if (evt.success) {
					var text = "";
					for (var i = 0; i < evt.places.length; i++) {
						text += "" + i + ") " + evt.places[i].address + "\n";
					}
					Ti.API.info('Reversed forward: '+text);
				}
				else {
					Ti.UI.createAlertDialog({
						title:'Forward geo error',
						message:evt.error
					}).show();
					Ti.API.info("Code translation: "+translateErrorCode(e.code));
				}
			});
		});
	});	
	

};

module.exports = geolocation;
