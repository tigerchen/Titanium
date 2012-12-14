function GetPasswordWindow(title) {
	
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
	backgroundColor:'white'
});

var lLog = Titanium.UI.createLabel({
	center: {x:'31%', y:'15%'},
	font: {fontSize:width / 20, fontFamily: 'Helvetica'}	,
	text: '   Update your password',
	color:'red'	
});
vBody.add(lLog);

var tOld = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_top.png',
	center: {x:'50%', y:'24%'},
	width:'85%',
	height:'10%',
	hintText:'Old Password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tOld);

var tPassword = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_middle.png',
	center: {x:'50%', y:'34%'},
	width:'85%',
	height:'10%',
	hintText:'Password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tPassword);

var tRPassword = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_bottom.png',
	center: {x:'50%', y:'44%'},
	width:'85%',
	height:'10%',
	hintText:'Repeat password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tRPassword);

var bSend = Titanium.UI.createButton({
	backgroundImage:'/images/send.png',
	center: {x:'50%', y:'60%'},
	width:'85%',
	height:'11%'
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

vBody.add(bSend);
self.add(vBody);

return self;
};

module.exports = GetPasswordWindow;
