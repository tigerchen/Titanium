function LoginWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
		
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

var lLog = Titanium.UI.createLabel({
	center: {x:'17%', y:'10%'},
	font: {fontSize:width / 16, fontFamily: 'Helvetica'}	,
	text: 'Log in',
	color:'red'	
});
vBody.add(lLog);

var lInfo = Titanium.UI.createLabel({
	center: {x:'22%', y:'16%'},
	font: {fontSize:width / 24, fontFamily: 'Helvetica'}	,
	text: 'Welcome back!',
	color:'black'	
});
vBody.add(lInfo);

var tEmail = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_top.png',
	center: {x:'50%', y:'25%'},
	width:'85%',
	height:'10%',
	hintText:'Email',
	paddingLeft: 10
});	
vBody.add(tEmail);

var tPassword = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_bottom.png',
	center: {x:'50%', y:'35%'},
	width:'85%',
	height:'10%',
	hintText:'Password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tPassword);

var bSignup = Titanium.UI.createButton({
	backgroundImage:'/images/login.png',
	center: {x:'50%', y:'49%'},
	width:'85%',
	height:'11%'
});

var bConnect = Titanium.UI.createButton({
	backgroundImage:'/images/fb_connect.png',
	center: {x:'50%', y:'64%'},
	width:'85%',
	height:'11%'
});

var lForgot = Titanium.UI.createLabel({
	center: {x:'50%', y:'75%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: 'Forgot your password?',
	color:'red'
});


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

vBody.add(bSignup);
vBody.add(bConnect);
vBody.add(lForgot);

self.add(vBody);


return self;
};

module.exports = LoginWindow;