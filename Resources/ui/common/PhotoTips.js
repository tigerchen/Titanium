function PhotoTipsWindow(title) {

	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;
	
//window
var self = Ti.UI.createWindow({
title:title,
backgroundColor:'black',
navBarHidden:true
});

//Header
var vHeader = Titanium.UI.createView({
	top:0,
	left:0,
	height:'10%',
	width:'100%',
	backgroundImage:'/images/topbar.png'
});

var bBack = Titanium.UI.createButton({
	backgroundImage:'/images/back.png',
	center: {x:'15%', y:'50%'},
	height:'70%',
	width:'20%'	
});

vHeader.add(bBack);


//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'90%',
	width:'100%',
	backgroundColor:'white'
});

var lTips = Titanium.UI.createLabel({
	center: {x:'45%', y:'10%'},
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: '-> Place Receipt on flat surface \n-> Use adequate lighting \n-> Make sure text is not blurry',
	color:'black'
});
vBody.add(lTips);

var iTips = Titanium.UI.createImageView({
	image:'/images/example.png',
	height: '50%',
	width: '80%',
	center: {x:'50%', y:'47%'}
});
vBody.add(iTips);

var lHelp = Titanium.UI.createLabel({
	center: {x:'36%', y:'78%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: 'Need more help?',
	color:'red'
});
vBody.add(lHelp);

var lFaq = Titanium.UI.createLabel({
	center: {x:'68%', y:'78%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'See our FAQ.',
	color:'red'
});
vBody.add(lFaq);

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

self.add(vHeader);
self.add(vBody);

return self;
};

module.exports = PhotoTipsWindow;
