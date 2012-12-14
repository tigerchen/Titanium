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

var lPromo = Titanium.UI.createLabel({
	center: {x:'26%', y:'21%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: 'Enter promo code',
	color:'red'	
});
vBody.add(lPromo);

var lInfo = Titanium.UI.createLabel({
	center: {x:'35%', y:'27%'},
	font: {fontSize:width / 28, fontFamily: 'Helvetica'},
	text: "Case sensitive, no spaces please!",
	color:'black'	
});
vBody.add(lInfo);

var tPromo = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_1.png',
	center: {x:'50%', y:'35%'},
	width:'85%',
	height:'10%',
	hintText:'Promo code',
	paddingLeft: 10
});	
vBody.add(tPromo);

var bSend = Titanium.UI.createButton({
	backgroundImage:'/images/send.png',
	center: {x:'50%', y:'48%'},
	width:'85%',
	height:'11%'
});


var lInfo2 = Titanium.UI.createLabel({
	center: {x:'37%', y:'62%'},
	font: {fontSize:width / 20, fontFamily: 'Helvetica'},
	text: "Promo code not working?",
	color:'black'	
});
vBody.add(lInfo2);

var lContact = Titanium.UI.createLabel({
	center: {x:'80%', y:'62%'},
	font: {fontSize:width / 20, fontFamily: 'Helvetica'},
	text: "Contact us",
	color:'red'	
});
vBody.add(lContact);

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
