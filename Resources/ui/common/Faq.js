function FaqWindow(title) {
	
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

var iTitle = Titanium.UI.createLabel({
	center: {x:'50%', y:'7%'},
	height:'15%',
	width:'100%',
	backgroundColor:'white',
	font: {fontSize:width / 16, fontFamily: 'Helvetica'},
	text:'    Frequently asked questions',
	color:'red',
	textAlign:'left'		
});
vBody.add(iTitle);

var vAsk = Titanium.UI.createView({
	center: {x:'50%', y:'57%'},
	backgroundImage:'/images/comments.png',
	width:'90%',
	height:'73%'
});

// var lAsk = Titanium.UI.createLabel({
	// center: {x:'50%', y:'0%'},
	// font: {fontSize:width / 24, fontFamily: 'Helvetica'},
	// text: 'Question 1? \nAnswer 1 \n\n Question 2? \nAnswer 2 \n\n Question 3? \nAnswer 3 \n\n Question 4? \nAnswer 4',
	// width:'90%',
	// height:'100%',
	// color:'black'
// });
// vAsk.add(lAsk);

vBody.add(vAsk);


functionQuestion = function(y,text) {

      	var Question = Titanium.UI.createLabel({
			center:{x:'20%',y:y},
			font:{fontWeight:'bold',fontSize:width / 22},
			text:text,
			color:'red'	
		});
		vAsk.add(Question);
		
};

functionAnswer = function(y,text) {

      	var Answer = Titanium.UI.createLabel({
			center:{x:'17%',y:y},
			font:{fontWeight:'bold',fontSize:width / 22},
			text:text,
			color:'black'
		});
		vAsk.add(Answer);
		
};

functionQuestion('10%','Question 1?');
functionAnswer('16%','Answer 1');
functionQuestion('30%','Question 2?');
functionAnswer('36%','Answer 2');
functionQuestion('50%','Question 3?');
functionAnswer('56%','Answer 3');
functionQuestion('70%','Question 4?');
functionAnswer('76%','Answer 4');

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

module.exports = FaqWindow;
