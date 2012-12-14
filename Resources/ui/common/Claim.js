function ClaimWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;


//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'88%',
	width:'100%',
	backgroundColor:'white'
});

var iClaim = Titanium.UI.createImageView({
	width:'95%',
	height:'95%',
	image:'/images/claim_bg.png',
	center:{x:'50%',y:'50%'}
});
vBody.add(iClaim);

var lReward = Titanium.UI.createLabel({
	center: {x:'50%', y:'35%'},
	font: {fontSize:width / 16, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Free coffee or tea',
	color:'red'	
});
vBody.add(lReward);

var bMark = Titanium.UI.createButton({
	backgroundImage:'/images/mark_as_used.png',
	center: {x:'50%', y:'56%'},
	height:'21%',
	width:'54%'
});
vBody.add(bMark);

var lStaff = Titanium.UI.createLabel({
	center: {x:'50%', y:'60%'},
	font: {fontSize:width / 34, fontFamily: 'Helvetica'}	,
	text: 'Staff: Use code COFFEE',
	textAlign: 'center',
	color:'white'
});
vBody.add(lStaff);

var lReward = Titanium.UI.createLabel({
	center: {x:'50%', y:'77%'},
	font: {fontSize:width / 34, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'TO CLAIM, PLEASE PRESENT\nTHIS TO YOUR SERVER\nAT TIME OF PURCHASE',
	textAlign: 'center',
	color:'black'
});
vBody.add(lReward);


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

module.exports = ClaimWindow;
