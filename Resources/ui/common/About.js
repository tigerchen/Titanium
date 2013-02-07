function AboutWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'back');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;
	
//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'90%',
	width:'100%',
	backgroundColor:'black'
});

var iAbout = Titanium.UI.createImageView({
	center: {x:'50%', y:'15%'},
	height:'30%',
	width:'100%',
	image:'/images/about_logo.png'	
});
vBody.add(iAbout);

var vStory = Titanium.UI.createView({
	center: {x:'50%', y:'65%'},
//	backgroundImage:'/images/comments.png',
	backgroundColor:'white',
	width:'90%',
	height:'60%'
});

var lStory = Titanium.UI.createLabel({
	center: {x:'50%', y:'50%'},
	font: {fontSize:width / 24, fontFamily: 'Helvetica'}	,
	text: 'Founded in 1994, Aroma Espresso Bar is \nthe largest and most successful espresso \nbar chain in israel, serving over 25 milion \n' +
			'loyal customer a year in more than ninety \nbranches. Aroma boasts excellent home roasted \ncoffee and a fresh, innovative : menu..',
	width:'90%',
	height:'100%',
	color:'black'
});
vStory.add(lStory);

vBody.add(vStory);


//bSignup.addEventListener('click',function(e){
//	
//	var hostURL = "http://10.0.2.2:3000/api/v1/user/signup?";
//	
//	// var deviceUUID = Ti.Platform.macaddress; // Ti.Network.remoteDeviceUUID;
//	// var deviceName = Ti.Platform.username;
//	// var deviceModel = Ti.Platform.model;
//	// var deviceSystemVersion = Ti.Platform.version;
//	// var deviceToken = e.deviceToken;
//	
//	var host = hostURL;
//	var urlString = host;
//	/*urlString += "&appname=" + appName;
//	urlString += "&appversion=" + appVersion;
//	urlString += "&deviceuid=" + deviceUUID;
//	urlString += "&devicetoken=" + deviceToken;
//	urlString += "&devicename=" + deviceName;
//	urlString += "&devicemodel=" + deviceModel;
//	urlString += "&deviceversion=" + deviceSystemVersion;*/
//	
//	var latitude = '-6.923956';
//	var longitude = '107.55317';
//	var register_type = 'Email PWD';
//	var osname = Ti.Platform.osname;
//	var device_id = Titanium.Platform.id;			
//				
//	urlString += "email=" + tEmail.value;
//	urlString += "&password=" + tPassword.value;
//	urlString += "&latitude=" + latitude;
//	urlString += "&longitude=" + longitude;
//	urlString += "&register_type =" + register_type;
//	urlString += "&register_device_type =" + osname;
//	urlString += "&device_id =" + device_id;	
//								
//	var loader = Ti.Network.createHTTPClient();
//	loader.setTimeout(60000);
//				
//	loader.onload = function(evt)
//	{
//		//alert(evt);
//					
//		//create json object using the Json.parse function
//		var jsonObject = JSON.parse(this.responseText);
//		alert(jsonObject.notice);
//	}
//				
//	loader.open('POST', urlString, false);
//	loader.send();
//	
//});

self.add(vBody);


return self;
};

module.exports = AboutWindow;
