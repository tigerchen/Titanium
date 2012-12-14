function ActivityWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title,'');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;


//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'90%',
	width:'100%',
	backgroundColor:'white'
});


//Reward Top
var vReward = Titanium.UI.createView({
	center: {x:'50%', y:'7%'},
	height:'10%',
	width:'90%',
	backgroundImage:'/images/activity_top.png'
});
vBody.add(vReward);

var lReward = Titanium.UI.createLabel({
	left:'5%',
	top:'25%',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'My reward points'
});
vReward.add(lReward);

var lPoint = Titanium.UI.createLabel({
	right:'5%',
	top:'25%',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	height:'60%',
	width:'10%',
	text:'75'	
});
vReward.add(lPoint);


//Reward Middle
var vPoints = Titanium.UI.createView({
	center: {x:'50%', y:'17%'},
	height:'10%',
	width:'90%',
	backgroundImage:'/images/activity_mid.png'
});
vBody.add(vPoints);

var lPoints = Titanium.UI.createLabel({
	left:'5%',
	top:'25%',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: '01-15-12'
});
vPoints.add(lPoints);

var lInfo = Titanium.UI.createLabel({
	right:'5%',
	top:'25%',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	height:'60%',
	width:'10%',
	text:'14'	
});
vPoints.add(lInfo);


//Reward Bottom
var vBPoints = Titanium.UI.createView({
	center: {x:'50%', y:'27%'},
	height:'10%',
	width:'90%',
	backgroundImage:'/images/activity_bottom.png'
});
vBody.add(vBPoints);

var lBPoints = Titanium.UI.createLabel({
	left:'5%',
	top:'25%',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: '01-26-12'
});
vBPoints.add(lBPoints);

var lBInfo = Titanium.UI.createLabel({
	right:'5%',
	top:'25%',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	height:'60%',
	width:'10%',
	text:'21'	
});
vBPoints.add(lBInfo);



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

module.exports = ActivityWindow;
