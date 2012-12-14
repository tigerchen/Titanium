function RewardsWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;


//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'25%',
	width:'100%',
	backgroundColor:'white'
});

var iRewards = Titanium.UI.createImageView({
	width:'90%',
	height:'80%',
	image:'/images/rewards_counter.png',
	center:{x:'50%',y:'50%'}
});
vBody.add(iRewards);

var lReward = Titanium.UI.createLabel({
	center: {x:'32%', y:'30%'},
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'My reward points'	
});
vBody.add(lReward);

var lPoint = Titanium.UI.createLabel({
	center: {x:'90%', y:'30%'},
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: '25'
});
vBody.add(lPoint);

var lActivity = Titanium.UI.createLabel({
	center: {x:'25%', y:'68%'},
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'View activity'
});
vBody.add(lActivity);



var lOffers = Titanium.UI.createLabel({
	center: {x:'50%', y:'43%'},
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Rewards & Offers',
	color:'white'
});
self.add(lOffers);

var vOffer1 = Titanium.UI.createView({
	center: {x:'50%', y:'53%'},
	height:'10%',
	width:'90%',
	backgroundImage:'/images/reward_available.png'
});
self.add(vOffer1);

var lOffer1 = Titanium.UI.createLabel({
	left: 15,
	font: {fontSize:width / 20, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Free Coffee or Tea',
	color:'white'
});
vOffer1.add(lOffer1);

var iOffer1 = Titanium.UI.createLabel({
	right: 10,
	font: {fontSize:width / 24, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'FREE',
	color:'white',
	backgroundImage: '/images/cost_lg.png',
	width: '15%',
	height: '60%',
	textAlign:'center'
});
vOffer1.add(iOffer1);


var vOffer2 = Titanium.UI.createView({
	center: {x:'50%', y:'66%'},
	height:'10%',
	width:'90%',
	backgroundImage:'/images/reward_unavailable.png'
});
self.add(vOffer2);

var lOffer2 = Titanium.UI.createLabel({
	left: 15,
	font: {fontSize:width / 20, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Free Pastry',
	color:'white'
});
vOffer2.add(lOffer2);

var iOffer2 = Titanium.UI.createLabel({
	right: 10,
	font: {fontSize:width / 24, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: '50',
	color:'white',
	backgroundImage: '/images/cost_sm.png',
	width: '15%',
	height: '60%',
	textAlign:'center'
});
vOffer2.add(iOffer2);


var vOffer3 = Titanium.UI.createView({
	center: {x:'50%', y:'79%'},
	height:'10%',
	width:'90%',
	backgroundImage:'/images/reward_unavailable.png'
});
self.add(vOffer3);

var lOffer3 = Titanium.UI.createLabel({
	left: 15,
	font: {fontSize:width / 20, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Free Sandwitch',
	color:'white'
});
vOffer3.add(lOffer3);

var iOffer3 = Titanium.UI.createLabel({
	right: 10,
	font: {fontSize:width / 24, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: '100',
	color:'white',
	backgroundImage: '/images/cost_sm.png',
	width: '15%',
	height: '60%',
	textAlign:'center'
});
vOffer3.add(iOffer3);


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

module.exports = RewardsWindow;
